import { Data } from "../data.js";
import fetchData from "../handlers/fetchData.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import createLeagueTabs from "./createLeagueTabs.js";

export const createLeaguesList = () => {
  const bigRow = createDomElement("div", {
    className: "row justify-content-center",
  });

  const makeList = async () => {
    const promisesArray = Data.leaguesIds.map(async (num) => {
      const promise = await fetchData(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${num}`
      );
      return promise;
    });

    const leagues = await Promise.all(promisesArray);

    let output = "";
    leagues.forEach((league) => {
      const { strCountry, strBadge, strLeague, idLeague } = league.leagues[0];
      output += `
        <div class="col col-md-2 league">
        <div class="
            card league-js
            align-items-center
            justify-content-center
            text-center
          " style="width: 15rem"
          data-country=${strCountry}
          data-id=${idLeague}>
          <img src=${strBadge} class="card-img-top" alt="..." style="min-height: 50%">
          <div class="card-body d-flex align-items-center">
            <h5 class="card-title">${strLeague}</h5>
          </div>
        </div>
      </div>
        `;
    });
    bigRow.innerHTML = output;

    // select one league ==========
    const leagues2 = getDomElement(".league-js", "all");
    leagues2.forEach((league) => {
      league.addEventListener("click", () => {
        createLeagueTabs(league);
      });
    });
  };

  makeList();

  return bigRow;
};
export default createLeaguesList;
