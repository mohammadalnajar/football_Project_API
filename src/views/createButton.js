import createDomElement from "../utils/createDomElement.js";

export const createButton = (text, id) => {
  const btn = createDomElement("button", { id: id });
  btn.textContent = text;

  return btn;
};
