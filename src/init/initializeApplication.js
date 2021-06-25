import { ROOT_ID } from "../constants.js";
import signOut from "../handlers/signOut.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "../views/createButton.js";
import createSearchControls from "../views/createSearchControls.js";

export const initializeApplication = () => {
  clearDomElement(ROOT_ID);
  const root = getDomElement(ROOT_ID);
  const signOutBtn = createButton("Sign Out", "sign-out-btn", "btn");
  signOutBtn.addEventListener("click", () => {
    signOut();
  });
  const bigContainer = createDomElement("div", { className: "container" });
  const flexContainer = createDomElement("div", {
    className: "d-flex flex-column",
  });
  const searchControls = createSearchControls();

  flexContainer.appendChild(searchControls);
  bigContainer.appendChild(flexContainer);
  root.appendChild(bigContainer);
  root.appendChild(signOutBtn);
};
export default initializeApplication;
