import { ROOT_ID } from "../constants.js";
import signIn from "../handlers/signIn.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "./createButton.js";
export const createSignInForm = () => {
  const root = getDomElement(ROOT_ID);
  clearDomElement(ROOT_ID);
  const signInContainer = createDomElement("div", { id: "sign-in-container" });
  const userNameInput = createDomElement("input", { id: "user-name-input" });
  const passWordInput = createDomElement("input", { id: "password-input" });
  const signInBtn = createButton("Sign In", "sign-in-btn");
  signInBtn.addEventListener("click", (e) => {
    signIn(e, userNameInput.value, passWordInput.value);
  });

  userNameInput.placeholder = "Username";
  passWordInput.placeholder = "Password";
  passWordInput.setAttribute("type", "password");
  signInContainer.appendChild(userNameInput);
  signInContainer.appendChild(passWordInput);
  signInContainer.appendChild(signInBtn);
  root.appendChild(signInContainer);
};
export default createSignInForm;
