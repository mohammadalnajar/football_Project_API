import createDomElement from "../utils/createDomElement.js";

export const createLoadingIcon = (parent) => {
  const div = createDomElement("div", {
    className: "d-flex justify-content-center",
  });
  div.innerHTML = `<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`;
  parent.appendChild(div);
};
export default createLoadingIcon;
