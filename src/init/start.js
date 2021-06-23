import getDomElement from "../utils/getDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import { ROOT } from "../constants.js";
import { createButton } from "../views/createButton.js";

const start = () => {
  const root = getDomElement(ROOT);
  const startPageContainer = createDomElement("div", {
    id: "start-page__container",
  });
  const signUpBtn = createButton("Sign Up", "sign-up-btn");
  const signInBtn = createButton("Sign In", "sign-in-btn");
  startPageContainer.appendChild(signUpBtn);
  startPageContainer.appendChild(signInBtn);
  root.appendChild(startPageContainer);
  console.log(root);
};

window.addEventListener("load", start);
