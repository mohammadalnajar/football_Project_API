import { ROOT_ID } from "../constants.js";
import signOut from "../handlers/signOut.js";
import clearDomElement from "../utils/clearDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "../views/createButton.js";

export const initializeApplication = () => {
  clearDomElement(ROOT_ID);
  const root = getDomElement(ROOT_ID);
  const signOutBtn = createButton("Sign Out", "sign-out-btn", "btn");
  signOutBtn.addEventListener("click", () => {
    signOut();
  });
  root.appendChild(signOutBtn);
};
export default initializeApplication;
