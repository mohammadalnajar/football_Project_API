import { Data } from "../data.js";
import createDomElement from "../utils/createDomElement.js";

export const createLeagueNav = () => {
  const nav = createDomElement("nav");
  const userName = JSON.parse(localStorage.getItem("status")).name;
  const leagueName = Data.selectedLeague.dataset.name;
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

    <div class="teams-header header"><h3>${userName} please select your loved Team >> </h3></div>
    <div class="table-header header hide"><h3>${userName} this table is ${leagueName
    .split(",")
    .join(" ")} league's table  >> </h3></div>
    <div class="matches-header header hide"><h3>${userName} these are the last 15 matches in ${leagueName
    .split(",")
    .join(" ")} >> </h3></div>
  </div>`;
  return nav;
};
export default createLeagueNav;
