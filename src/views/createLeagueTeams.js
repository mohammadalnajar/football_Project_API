import setAttributes from "../handlers/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";

export const createLeagueTeams = (league) => {
  const teamsDiv = createDomElement("div", {
    className: "tab-pane fade show active",
    id: "nav-home",
  });
  setAttributes(teamsDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-home-tab",
  });
  teamsDiv.innerHTML = "Teams";
  return teamsDiv;
};
export default createLeagueTeams;
