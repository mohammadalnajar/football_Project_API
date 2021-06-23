import { ROOT_ID } from "../constants.js";
import registerUser from "../handlers/registerUser.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "./createButton.js";
import randomNum from "./createRandomNum.js";

export const createSignUpForm = () => {
  console.log("sign Up");
  const root = getDomElement(ROOT_ID);
  clearDomElement(ROOT_ID);
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
  registerBtn.addEventListener("click", (e) => {
    registerUser(e, userNameInput.value, passWordInput.value);
  });

  userNameInput.placeholder = "Username";
  passWordInput.placeholder = "Password";
  passWordInput.setAttribute("type", "password");
  signUpContainer.appendChild(userNameInput);
  signUpContainer.appendChild(passWordInput);
  signUpContainer.appendChild(registerBtn);
  root.appendChild(signUpContainer);
};
export default createSignUpForm;
