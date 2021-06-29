import getDomElement from "../utils/getDomElement.js";

export const showHideHeader = () => {
  const navButtons = getDomElement(".nav-link", "all");

  navButtons.forEach((btn) => {
    const header = getDomElement(".teams-header");
    if (btn.id == "nav-home-tab" && btn.classList.contains("active")) {
      btn.addEventListener("click", () => {
        header.classList.remove("hide");
      });
    } else {
      btn.addEventListener("click", () => {
        header.classList.add("hide");
      });
    }
  });
};
export default showHideHeader;
