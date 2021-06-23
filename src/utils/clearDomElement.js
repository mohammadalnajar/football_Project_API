import getDomElement from "./getDomElement";

export const clearDomElement = (id) => {
  const element = getDomElement(id);
  element.innerHTML = "";
};
