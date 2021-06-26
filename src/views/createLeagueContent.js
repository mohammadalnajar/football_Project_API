import createDomElement from "../utils/createDomElement.js";
import createLeagueMatches from "./createLeagueMatches.js";
import createLeagueTable from "./createLeagueTable.js";
import createLeagueTeams from "./createLeagueTeams.js";

export const createLeagueContent = async (league) => {
  const bigDiv = createDomElement("div", {
    className: "tab-content",
    id: "nav-tabContent",
  });
  const teams = await createLeagueTeams(league);
  const table = createLeagueTable(league);
  const matches = createLeagueMatches(league);
  bigDiv.appendChild(teams);
  bigDiv.appendChild(table);
  bigDiv.appendChild(matches);
  return bigDiv;
};
export default createLeagueContent;
