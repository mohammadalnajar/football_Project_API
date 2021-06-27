import { Data } from "../data.js";
import createLeagueTabs from "../views/createLeagueTabs.js";

export const goBackToTeamsList = (backBtn) => {
  backBtn.remove();
  createLeagueTabs(Data.selectedLeague);
};
export default goBackToTeamsList;
