import { ERROR_CONTAINER_ID, ROOT_ID } from "../constants.js";
import signOut from "../handlers/signOut.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "../views/createButton.js";
import createLeaguesList from "../views/createLeaguesList.js";
import createSearchControls from "../views/createSearchControls.js";

export const initializeApplication = () => {
  clearDomElement(ROOT_ID);
  const root = getDomElement(ROOT_ID);

  // error handling ========

  const errorContainer = getDomElement(ERROR_CONTAINER_ID);
  if (errorContainer != null) {
    root.classList.remove("blur");
    getDomElement(ERROR_CONTAINER_ID).remove();
  }
  //  background =============

  const background = createDomElement("div", {
    className: "background signed-in",
  });
  background.style.background =
    'url("../../assets/WallpaperDog-17048551.jpg")no-repeat center center fixed';

  const signOutBtn = createButton("Sign Out", "sign-out-btn", "btn");
  signOutBtn.addEventListener("click", () => {
    signOut();
  });
  const bigContainer = createDomElement("div", { className: "container" });
  const flexContainer = createDomElement("div", {
    className: "d-flex flex-column",
  });

  // search Controls =====================
  const searchControls = createSearchControls();

  // Leagues List =================
  const leaguesList = createLeaguesList();

  root.appendChild(background);
  flexContainer.appendChild(searchControls);
  flexContainer.appendChild(leaguesList);
  bigContainer.appendChild(flexContainer);
  root.appendChild(bigContainer);
  root.appendChild(signOutBtn);
};
export default initializeApplication;
