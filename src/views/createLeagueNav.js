import createDomElement from "../utils/createDomElement.js";

export const createLeagueNav = () => {
  const nav = createDomElement("nav");
  nav.innerHTML = `
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button
      class="nav-link active"
      id="nav-home-tab"
      data-bs-toggle="tab"
      data-bs-target="#nav-home"
      type="button"
      role="tab"
      aria-controls="nav-home"
      aria-selected="true"
    >
      Teams
    </button>
    <button
      class="nav-link"
      id="nav-profile-tab"
      data-bs-toggle="tab"
      data-bs-target="#nav-profile"
      type="button"
      role="tab"
      aria-controls="nav-profile"
      aria-selected="false"
    >
      Table
    </button>
    <button
      class="nav-link"
      id="nav-contact-tab"
      data-bs-toggle="tab"
      data-bs-target="#nav-contact"
      type="button"
      role="tab"
      aria-controls="nav-contact"
      aria-selected="false"
    >
      Matches
    </button>
  </div>`;
  return nav;
};
export default createLeagueNav;
