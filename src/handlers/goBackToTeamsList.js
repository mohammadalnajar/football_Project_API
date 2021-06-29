import { BIG_CONTAINER_ID } from "../constants.js";
import { Data } from "../data.js";
import getDomElement from "../utils/getDomElement.js";
import createLeagueTabs from "../views/createLeagueTabs.js";

export const goBackToTeamsList = (backBtn) => {
  getDomElement(BIG_CONTAINER_ID).classList.remove("team-details");
  backBtn.remove();
  createLeagueTabs(Data.selectedLeague);
};
export default goBackToTeamsList;
