import initializeApplication from "../init/initializeApplication.js";

export const goBackToLeaguesList = (backBtn) => {
  backBtn.remove();
  initializeApplication();
};
export default goBackToLeaguesList;
