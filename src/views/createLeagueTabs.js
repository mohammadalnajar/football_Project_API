import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import fetchData from "../handlers/fetchData.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import createLeagueContent from "./createLeagueContent.js";
import createLeagueNav from "./createLeagueNav.js";

export const createLeagueTabs = (league) => {
  console.log(league.dataset.id);
  clearDomElement(BIG_CONTAINER_ID);
  const bigContainer = getDomElement(BIG_CONTAINER_ID);

  const nav = createLeagueNav();
  const leagueContent = createLeagueContent(league);
  fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${league.dataset.id}`
  );
  bigContainer.appendChild(nav);
  bigContainer.appendChild(leagueContent);
};
export default createLeagueTabs;
