import getDomElement from "./getDomElement.js";

export const clearDomElement = (id) => {
  const element = getDomElement(id);
  element.innerHTML = "";
};
export default clearDomElement;
