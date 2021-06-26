import { ROOT_ID } from "../constants.js";
import showPassWord from "../handlers/showPassWord.js";
import signIn from "../handlers/signIn.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "./createButton.js";
import createSignUpForm from "./createSignUpForm.js";
export const createSignInForm = () => {
  const root = getDomElement(ROOT_ID);
  clearDomElement(ROOT_ID);
  const signInContainer = createDomElement("div", {
    id: "sign-in-container",
    className: "form",
  });
  const userNameInput = createDomElement("input", {
    id: "user-name-input",
    className: "form-control",
  });
  const passWordInput = createDomElement("input", {
    id: "password-input",
    className: "form-control",
  });

  const eye = createDomElement("i", { className: "far fa-eye-slash " });
  const signInBtn = createButton("Sign In", "sign-in-btn", "btn");
  const notJoinedYet = createDomElement("a");
  notJoinedYet.addEventListener("click", () => {
    createSignUpForm();
  });
  notJoinedYet.textContent = "Do not have an account yet?";
  notJoinedYet.href = "#";

  eye.addEventListener("click", () => {
    showPassWord(passWordInput, eye);
  });
  signInBtn.addEventListener("click", (e) => {
    signIn(e, userNameInput.value, passWordInput.value);
  });

  userNameInput.placeholder = "Username";
  passWordInput.placeholder = "Password";
  passWordInput.setAttribute("type", "password");
  signInContainer.appendChild(userNameInput);
  signInContainer.appendChild(passWordInput);
  signInContainer.appendChild(eye);
  signInContainer.appendChild(signInBtn);
  signInContainer.appendChild(notJoinedYet);
  root.appendChild(signInContainer);
};
export default createSignInForm;