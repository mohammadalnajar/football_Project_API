import setAttributes from "../utils/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";
import fetchData from "../handlers/fetchData.js";
import { Data } from "../data.js";

export const createLeagueMatches = async (league) => {
  const matchesDiv = createDomElement("div", {
    className: "tab-pane fade",
    id: "nav-contact",
  });
  setAttributes(matchesDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-contact-tab",
  });
  let output = ` <table class="table table-hover">
  <thead>
        <tr>
          <th scope="col"style="text-align:center;vertical-align: middle;">#</th>
          <th style="text-align:center" scope="col">Home</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th style="text-align:center" scope="col">Away</th>
          <th scope="col" style="text-align:center">datum</th>
        </tr>
      </thead>
  <tbody class="tbody"> `;

  const { events } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${league.dataset.id}`
  );
  events.forEach((event) => {
    let homeIcon;
    let awayIcon;
    for (const id in Data.teamsIcons) {
      if (event.idHomeTeam === id) {
        homeIcon = Data.teamsIcons[id];
      } else if (event.idAwayTeam === id) {
        awayIcon = Data.teamsIcons[id];
      }
    }

    const {
      dateEvent,
      intAwayScore,
      intHomeScore,
      intRound,
      strAwayTeam,
      strHomeTeam,
    } = event;
    output += `
    <tr>
          <th scope="row"style="text-align:center;vertical-align: middle;">FT</th>
          <td  style="text-align:center;vertical-align: middle;">${strHomeTeam}</td>
          <td >
            <img
              src=${homeIcon}
              alt=""
            />
          </td>
          <td style="text-align:center;vertical-align: middle;">${intHomeScore}</td>
          <td style="text-align:center;vertical-align: middle;">VS</td>
          <td style="text-align:center;vertical-align: middle;">${intAwayScore}</td>
          <td style="text-align:center;vertical-align: middle;">
            <img 
              src=${awayIcon}
              alt=""
            />
          </td>
          <td style="text-align:center;vertical-align: middle;" >${strAwayTeam}</td>
          <td style="text-align:center;vertical-align: middle;">${dateEvent}</td>
        </tr>

    `;
  });
  output += `</tbody>
  </table>`;
  matchesDiv.innerHTML = output;
  return matchesDiv;
};
export default createLeagueMatches;
