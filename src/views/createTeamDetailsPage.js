import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import fetchData from "../handlers/fetchData.js";
import goBackToTeamsList from "../handlers/goBackToTeamsList.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import setAttributes from "../utils/setAttributes.js";
import { createButton } from "./createButton.js";

export const createTeamDetailsPage = async (team) => {
  clearDomElement(BIG_CONTAINER_ID);
  getDomElement("#back-btn").remove();
  const backBtn = createButton("Go Back", "back-btn");
  setAttributes(backBtn, { class: "btn" });
  getDomElement(ROOT_ID).appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    goBackToTeamsList(backBtn);
  });
  const bigContainer = getDomElement(BIG_CONTAINER_ID);
  const flexContainer = createDomElement("div", {
    className: "d-flex team-details flex-column",
  });
  const { teams } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${team.dataset.id}`
  );
  const {
    idTeam,
    intFormedYear,
    intStadiumCapacity,
    strCountry,
    strDescriptionEN,
    strDescriptionES,
    strDescriptionDE,
    strDescriptionFR,
    strFacebook,
    strInstagram,
    strStadium,
    strStadiumLocation,
    strStadiumThumb,
    strTeam,
    strTeamBadge,
    strTwitter,
    strWebsite,
    strYoutube,
  } = teams[0];
  flexContainer.innerHTML = `
<div class="row">
<div class="col col-md-6 d-flex justify-content-center">
<div class="
team-js
align-items-center
justify-content-center
text-center
" style="width: 15rem" data-country=${strCountry} data-id=${idTeam}>
<img src=${strTeamBadge} class="card-img-top" alt="..." style="min-height: 50%">
<div class="card-body d-flex justify-content-center">
<h5 class="card-title "style="text-align:center">${strTeam}</h5>
</div>
</div>
</div>
<div class="col col-md-6 d-flex justify-content-center">
<div class="
team-js
align-items-center
justify-content-center
text-center
" style="width: 15rem" data-country=${strCountry} data-id=${idTeam}>
<img src=${strStadiumThumb} class="card-img-top" alt="..." style="min-height: 50%">
<div class="card-body d-flex justify-content-center">
<h5 class="card-title" "style="text-align:center">${strStadium}</h5>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center">
      <h5 class="card-title">
        ${strDescriptionEN}
      </h5>
    </div>
  </div>
</div>
</div>
<div class="row">
<div class="col col-md-2">
  <div>
    <a href=${strFacebook}>
    <img
      src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-512.png"
      alt="..." style="width: 30px"/>
    </a>
  </div>
</div>
<div class="col col-md-2">
  <div>
  <a href=${strYoutube} target="_blank">
    <img
      src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png"
      alt="..." style="width: 30px"/>
  </a>
    </div>
  </div>
</div>
`;
  bigContainer.appendChild(flexContainer);
};
export default createTeamDetailsPage;
