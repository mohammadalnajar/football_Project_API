import { ROOT_ID } from "../constants.js";
import { start } from "../init/start.js";
import clearDomElement from "../utils/clearDomElement.js";

export const signOut = () => {
  localStorage.removeItem("status");
  clearDomElement(ROOT_ID);
  start();
};
export default signOut;
