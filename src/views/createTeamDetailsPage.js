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
  const bigContainer = getDomElement(BIG_CONTAINER_ID);
  const div = createDomElement("div", {
    className: "d-flex justify-content-center",
  });
  div.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
  bigContainer.appendChild(div);

  getDomElement("#back-btn").remove();
  const backBtn = createButton("Go Back", "back-btn");
  setAttributes(backBtn, { class: "btn" });
  getDomElement(ROOT_ID).appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    goBackToTeamsList(backBtn);
  });
  bigContainer.classList.add("team-details");
  const flexContainer = createDomElement("div", {
    className: "d-flex  flex-column",
  });
  const { teams } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${team.dataset.id}`
  );

  clearDomElement(BIG_CONTAINER_ID);
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
<div class="row " style="align-items: center";>
<div class="col col-md-6 d-flex justify-content-center">
<div class="
team-js
align-items-center
justify-content-center
text-center
" style="width: 15rem;padding: 2rem;" data-country=${strCountry} data-id=${idTeam}>
<img src=${strTeamBadge} class="card-img-top" alt="..." style="min-height: 50%">
<div class="card-body d-flex justify-content-center">
<h5 class="card-title "style="text-align:center">${strTeam}</h5>
</div>
</div>
</div>
<div class="col col-md-6 d-flex justify-content-center" style="padding-top: 30px">
<div class="
team-js
align-items-center
justify-content-center
text-center
" style="width: 15rem" data-country=${strCountry} data-id=${idTeam}>
<img src=${
    strStadiumThumb != null
      ? strStadiumThumb
      : "../../assets/not-found-image.jpg"
  } class="card-img-top" alt="..." style="min-height: 50%">
<div class="card-body">
<h5 class="card-title" "style="text-align:center">${strStadium}</h5><br>
<h6>The stadium capacity is: ${intStadiumCapacity}</h6>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center" >
      <p class="card-title">
        ${strDescriptionEN}
      </p>
    </div>
  </div>
</div>
</div>
<div class="row justify-content-center p-3" style="background-color:#ffffff9e;border-radius: 0px 0px 10px 10px">
<div class="col col-md-2">
  <div style="text-align:center">
    <a href='https://${strFacebook}' style="color:#3b5998"target="_blank">
    <i class="fab fa-facebook"style="font-size: 1.8rem"></i>
    </a>
  </div>
</div>
<div class="col col-md-2">
  <div style="text-align:center">
  <a href='https://${strYoutube}' target="_blank">
  <i class="fab fa-youtube"style="font-size: 1.8rem;color:#ff0000"></i>
  </a>
    </div>
  </div>
<div class="col col-md-2">
  <div style="text-align:center">
  <a href='https://${strWebsite}' target="_blank">
  <i class="fas fa-globe-europe" style="font-size: 1.8rem"></i>
  </a>
    </div>
  </div>
<div class="col col-md-2">
  <div style="text-align:center">
  <a href='https://${strTwitter}' target="_blank">
  <i class="fab fa-twitter"style="font-size: 1.8rem"></i>
  </a>
    </div>
  </div>
<div class="col col-md-2">
  <div style="text-align:center">
  <a href='https://${strInstagram}' target="_blank">
  <i class="fab fa-instagram"style="font-size: 1.8rem;color:#c32aa3"></i>
  </a>
    </div>
  </div>
</div>
`;
  bigContainer.appendChild(flexContainer);
};
export default createTeamDetailsPage;
