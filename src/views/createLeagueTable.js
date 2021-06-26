import setAttributes from "../handlers/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";

export const createLeagueTable = (league) => {
  const tableDiv = createDomElement("div", {
    className: "tab-pane fade",
    id: "nav-profile",
  });
  setAttributes(tableDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-profile-tab",
  });
  tableDiv.innerHTML = "table";
  return tableDiv;
};
export default createLeagueTable;
