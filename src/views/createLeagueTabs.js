import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import goBackToLeaguesList from "../handlers/goBackToLeaguesList.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import setAttributes from "../utils/setAttributes.js";
import { createButton } from "./createButton.js";
import createLeagueContent from "./createLeagueContent.js";
import createLeagueNav from "./createLeagueNav.js";
import createTeamDetailsPage from "./createTeamDetailsPage.js";

export const createLeagueTabs = async (league) => {
  clearDomElement(BIG_CONTAINER_ID);
  const backBtn = createButton("Go Back", "back-btn");
  setAttributes(backBtn, { class: "btn" });
  getDomElement(ROOT_ID).appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    goBackToLeaguesList(backBtn);
  });
  const bigContainer = getDomElement(BIG_CONTAINER_ID);
  const div = createDomElement("div", {
    className: "d-flex justify-content-center",
  });
  div.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  bigContainer.appendChild(div);
  const nav = createLeagueNav();

  const leagueContent = await createLeagueContent(league);
  clearDomElement(BIG_CONTAINER_ID);
  bigContainer.appendChild(nav);
  bigContainer.appendChild(leagueContent);

  const teams = getDomElement(".team-js", "all");
  teams.forEach((team) => {
    team.addEventListener("click", () => {
      createTeamDetailsPage(team);
    });
  });
};
export default createLeagueTabs;
