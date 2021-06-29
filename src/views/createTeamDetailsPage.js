import { BIG_CONTAINER_ID, ROOT_ID } from "../constants.js";
import goBackToTeamsList from "../handlers/goBackToTeamsList.js";
import clearDomElement from "../utils/clearDomElement.js";
import createDomElement from "../utils/createDomElement.js";
import getDomElement from "../utils/getDomElement.js";
import setAttributes from "../utils/setAttributes.js";
import { createButton } from "./createButton.js";

export const createTeamDetailsPage = async (teams) => {
  const bigContainer = getDomElement(BIG_CONTAINER_ID);

  // ==============
  // adding a new back btn with nuw functionality
  getDomElement("#back-btn").remove();
  const backBtn = createButton("Go Back", "back-btn");
  setAttributes(backBtn, { class: "btn" });
  getDomElement(ROOT_ID).appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    goBackToTeamsList(backBtn);
  });
  // =============
  bigContainer.classList.add("team-details");
  const flexContainer = createDomElement("div", {
    className: "d-flex  flex-column",
  });

  clearDomElement(BIG_CONTAINER_ID);
  const {
    idTeam,
    intStadiumCapacity,
    strCountry,
    strDescriptionEN,
    strDescriptionES,
    strDescriptionDE,
    strDescriptionFR,
    strFacebook,
    strInstagram,
    strStadium,
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
<nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">
  <button class="nav-link active" id="nav-english-tab" data-bs-toggle="tab" data-bs-target="#nav-english" type="button" role="tab" aria-controls="nav-english" aria-selected="true">EN</button>
  <button class="nav-link" id="nav-spanish-tab" data-bs-toggle="tab" data-bs-target="#nav-spanish" type="button" role="tab" aria-controls="nav-spanish" aria-selected="false">ES</button>
  <button class="nav-link" id="nav-french-tab" data-bs-toggle="tab" data-bs-target="#nav-french" type="button" role="tab" aria-controls="nav-french" aria-selected="false">FR</button>
  <button class="nav-link" id="nav-german-tab" data-bs-toggle="tab" data-bs-target="#nav-german" type="button" role="tab" aria-controls="nav-german" aria-selected="false">DE</button>
 
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-english" role="tabpanel" aria-labelledby="nav-english-tab"><div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center" >
      <p class="card-title">
        ${
          strDescriptionEN != null
            ? strDescriptionEN
            : "<strong>Sorry We currently do not have a translated version in English</strong>"
        }
      </p>
    </div>
  </div>
</div>
</div></div>
<div class="tab-pane fade" id="nav-spanish" role="tabpanel" aria-labelledby="nav-spanish-tab"><div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center" >
      <p class="card-title">
        ${
          strDescriptionES != null
            ? strDescriptionES
            : "<strong>Sorry We currently do not have a translated version in Spanish</strong> <br><strong>Lo sentimos Actualmente no tenemos una versión traducida en español</strong>"
        }
      </p>
    </div>
  </div>
</div>
</div></div>
<div class="tab-pane fade" id="nav-french" role="tabpanel" aria-labelledby="nav-french-tab"><div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center" >
      <p class="card-title">
        ${
          strDescriptionFR != null
            ? strDescriptionFR
            : "<strong>Sorry We currently do not have a translated version in French</strong> <br><strong>Désolé Nous n'avons actuellement pas de version traduite en français</strong>"
        }
      </p>
    </div>
  </div>
</div>
</div></div>
<div class="tab-pane fade" id="nav-german" role="tabpanel" aria-labelledby="nav-german-tab"><div class="row">
<div class="col col-md-12">
  <div  style="width: 100%">
    <div class="card-body d-flex align-items-center" >
      <p class="card-title">
        ${
          strDescriptionDE != null
            ? strDescriptionDE
            : "<strong>Sorry We currently do not have a translated version in DE</strong> <br><strong>Leider haben wir derzeit keine übersetzte Version in Deutsch</strong>"
        }
      </p>
    </div>
  </div>
</div>
</div></div>
</div>
<div id="mapid"></div>
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
  <a href='https://${strYoutube}' style="color:#ff0000" "target="_blank">
  <i class="fab fa-youtube"style="font-size: 1.8rem;"></i>
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
  <a href='https://${strInstagram}'style="color:#c32aa3" target="_blank">
  <i class="fab fa-instagram"style="font-size: 1.8rem;"></i>
  </a>
    </div>
  </div>
</div>
`;
  bigContainer.appendChild(flexContainer);
};
export default createTeamDetailsPage;
