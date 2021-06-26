import setAttributes from "../handlers/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";

export const createLeagueMatches = (league) => {
  const matchesDiv = createDomElement("div", {
    className: "tab-pane fade",
    id: "nav-contact",
  });
  setAttributes(matchesDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-contact-tab",
  });
  matchesDiv.innerHTML = "Matches";
  return matchesDiv;
};
export default createLeagueMatches;
