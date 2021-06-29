export const setAttributes = (el, options) => {
  Object.keys(options).forEach((attr) => {
    el.setAttribute(attr, options[attr]);
  });
};
export default setAttributes;
/* 
how to use it:
ex: setAttributes(input, {"class": "my-class", "type": "checkbox", "checked": "checked"});
*/
