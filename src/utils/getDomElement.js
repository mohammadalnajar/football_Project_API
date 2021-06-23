const getDomElement = (qeury, option) => {
  if (option != null && option != undefined && option.toLowerCase() == "all") {
    return document.querySelectorAll(`${qeury}`);
  }
  return document.querySelector(`${qeury}`);
};
export default getDomElement;
