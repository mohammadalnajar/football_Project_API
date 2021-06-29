import { ERROR_CONTAINER_ID, ROOT_ID } from "../constants.js";
import { Data } from "../data.js";
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
  root.classList.remove("start-page");
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

  const signOutBtn = createButton("Sign Out", "sign-out-btn", "btn");
  signOutBtn.addEventListener("click", () => {
    signOut();
  });
  const bigContainer = createDomElement("div", { className: "container" });
  const flexContainer = createDomElement("div", {
    className: "d-flex flex-column align-items-center",
  });

  // adding welcome message
  const header = createDomElement("div", {
    className: "main-header",
  });
  const userName = JSON.parse(localStorage.getItem("status")).name;
  header.innerHTML = `<h1>Hello ${userName}, you are welcome in our Application</h1><br>
                      <h3>Please select you favorite league to see more details >> </h3>
  `;
  flexContainer.appendChild(header);
  // search Controls =====================

  // const searchControls = createSearchControls();

  // Leagues List =================
  const leaguesList = createLeaguesList();

  root.appendChild(background);
  // flexContainer.appendChild(searchControls);
  flexContainer.appendChild(leaguesList);
  bigContainer.appendChild(flexContainer);
  root.appendChild(bigContainer);
  root.appendChild(signOutBtn);
};
export default initializeApplication;
