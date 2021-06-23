import getDomElement from "../utils/getDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import { ROOT_ID } from "../constants.js";
import { createButton } from "../views/createButton.js";
import createSignUpForm from "../views/createSignUpForm.js";
import createSignInForm from "../views/createSignInForm.js";

const start = () => {
  const root = getDomElement(ROOT_ID);
  const startPageContainer = createDomElement("div", {
    id: "start-page__container",
  });
  const signUpBtn = createButton("Sign Up", "sign-up-btn");
  const signInBtn = createButton("Sign In", "sign-in-btn");

  signUpBtn.addEventListener("click", () => {
    createSignUpForm();
  });
  signInBtn.addEventListener("click", () => {
    createSignInForm();
  });

  startPageContainer.appendChild(signUpBtn);
  startPageContainer.appendChild(signInBtn);
  root.appendChild(startPageContainer);
  console.log(root);
};

window.addEventListener("load", start);
