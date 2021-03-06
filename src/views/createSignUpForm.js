import { ROOT_ID } from "../constants.js";
import automateText from "../handlers/automateText.js";
import registerUser from "../handlers/registerUser.js";
import showPassWord from "../handlers/showPassWord.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "./createButton.js";
import createSignInForm from "./createSignInForm.js";

export const createSignUpForm = () => {
  const root = getDomElement(ROOT_ID);
  clearDomElement(ROOT_ID);
  const header = createDomElement("div", { className: "header-text" });
  header.innerHTML = `
  <h1>
    <span class="type1"></span>
  </h1>
  `;
  root.appendChild(header);
  automateText("type1", "Welcome in our Football's Records app", "Have Fun!!!");
  const background = createDomElement("div", { className: "background" });
  const signUpContainer = createDomElement("div", {
    id: "sign-up-container",
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
  const registerBtn = createButton("Register", "register-btn", "btn");
  const joinedAlready = createDomElement("a");
  const eye = createDomElement("i", { className: "far fa-eye-slash " });
  registerBtn.addEventListener("click", () => {
    registerUser(userNameInput.value, passWordInput.value);
  });
  joinedAlready.addEventListener("click", () => {
    createSignInForm();
  });
  eye.addEventListener("click", () => {
    showPassWord(passWordInput, eye);
  });
  joinedAlready.textContent = "already have an account?";
  joinedAlready.href = "#";
  userNameInput.placeholder = "Username";
  passWordInput.placeholder = "Password";
  passWordInput.setAttribute("type", "password");

  signUpContainer.appendChild(userNameInput);
  signUpContainer.appendChild(passWordInput);
  signUpContainer.appendChild(eye);
  signUpContainer.appendChild(registerBtn);
  signUpContainer.appendChild(joinedAlready);
  root.appendChild(background);
  root.appendChild(signUpContainer);
};
export default createSignUpForm;
