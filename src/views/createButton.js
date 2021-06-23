import createDomElement from "../utils/createDomElement.js";

export const createButton = (text, id, className) => {
  const btn = createDomElement("button", { id: id, className: className });
  btn.textContent = text;

  return btn;
};
