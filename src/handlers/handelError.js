import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import initializeApplication from "../init/initializeApplication.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import { createButton } from "../views/createButton.js";

export const handelError = (err) => {
  clearDomElement(BIG_CONTAINER_ID);
  const errorContainer = createDomElement("div", {
    className: "error-container",
  });
  const errorMessage = createDomElement("h1", { className: "error-message" });
  const refreshBtn = createButton("Refresh", "refresh-btn");
  refreshBtn.classList.add("btn");
  errorMessage.innerHTML = `Sorry but currently we have some technical issues on this page <br> Could you try later please ? <br> The accrued error is:${err.message}`;
  refreshBtn.addEventListener("click", () => {
    initializeApplication();
  });
  getDomElement(ROOT_ID).classList.add("blur");
  errorContainer.appendChild(errorMessage);
  errorContainer.appendChild(refreshBtn);
  document.body.appendChild(errorContainer);
};
export default handelError;
