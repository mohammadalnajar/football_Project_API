import fetchData from "../handlers/fetchData.js";
import setAttributes from "../utils/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";
import { Data } from "../data.js";

export const createLeagueTeams = async (league) => {
  const teamsDiv = createDomElement("div", {
    className: "row justify-content-center",
  });
  const bigContainer = createDomElement("div", {
    className: "tab-pane fade show active",
    id: "nav-home",
  });

  setAttributes(bigContainer, {
    role: "tabpanel",
    "aria-labelledby": "nav-home-tab",
  });

  const { teams } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league.dataset.id}`
  );
  console.log(teams);
  let output = "";
  teams.forEach((team) => {
    const { idTeam, strCountry, strTeamBadge, strTeam } = team;

    output += `
    
    <div class="col col-md-2 league">
        <div class="
            card league-js
            align-items-center
            justify-content-center
            text-center
          " style="width: 15rem"
          data-country=${strCountry}
          data-id=${idTeam}>
          <img src=${strTeamBadge} class="card-img-top" alt="..." style="min-height: 50%">
          <div class="card-body d-flex align-items-center">
            <h5 class="card-title">${strTeam}</h5>
          </div>
        </div>
      </div>
    
    `;
  });
  teamsDiv.innerHTML = output;
  bigContainer.appendChild(teamsDiv);
  return bigContainer;
};
export default createLeagueTeams;
