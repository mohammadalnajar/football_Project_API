const createDomElement = (element, options) => {
  const { id } = options || {};
  const { className } = options || {};
  const item = document.createElement(`${element}`);
  if (id != null && id != undefined && id.length > 0) {
    item.id = id;
  }
  if (className != null && className != undefined && className.length > 0) {
    item.className = className;
  }
  return item;
};
export default createDomElement;
