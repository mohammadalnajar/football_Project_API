import getDomElement from "../utils/getDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import { ROOT_ID } from "../constants.js";
import { createButton } from "../views/createButton.js";
import createSignUpForm from "../views/createSignUpForm.js";
import createSignInForm from "../views/createSignInForm.js";
import clearDomElement from "../utils/clearDomElement.js";

const start = () => {
  const root = getDomElement(ROOT_ID);
  const startPageContainer = createDomElement("div", {
    id: "start-page__container",
    className: "form",
  });
  const haveAccount = createDomElement("h3");
  const haveNOAccount = createDomElement("h3");
  const signUpBtn = createButton("Sign Up", "sign-up-btn", "btn");
  const signInBtn = createButton("Sign In", "sign-in-btn", "btn");
  haveAccount.innerText = "Have already an account ?";
  haveNOAccount.innerText = "Have no account ?";
  signUpBtn.addEventListener("click", () => {
    createSignUpForm();
  });
  signInBtn.addEventListener("click", () => {
    createSignInForm();
  });

  startPageContainer.appendChild(haveNOAccount);
  startPageContainer.appendChild(signUpBtn);
  startPageContainer.appendChild(haveAccount);
  startPageContainer.appendChild(signInBtn);
  root.appendChild(startPageContainer);
  console.log(root);
};
export const initializeApplication = () => {
  clearDomElement(ROOT_ID);
};
window.addEventListener("load", start);
