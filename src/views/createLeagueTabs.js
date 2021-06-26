import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import clearDomElement from "../utils/clearDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import createLeagueContent from "./createLeagueContent.js";
import createLeagueNav from "./createLeagueNav.js";

export const createLeagueTabs = async (league) => {
  console.log(league.dataset.id);
  clearDomElement(BIG_CONTAINER_ID);
  const bigContainer = getDomElement(BIG_CONTAINER_ID);

  const nav = createLeagueNav();
  const leagueContent = await createLeagueContent(league);

  bigContainer.appendChild(nav);
  bigContainer.appendChild(leagueContent);
};
export default createLeagueTabs;
