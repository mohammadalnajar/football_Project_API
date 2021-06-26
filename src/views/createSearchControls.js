import createDomElement from "../utils/createDomElement.js";

export const createSearchControls = () => {
  const bigRow = createDomElement("div", {
    className: "row justify-content-center",
  });

  bigRow.innerHTML = `
  <form class="d-flex col-md-7">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">
      Search
    </button>
  </form>
  <div class="row col-md-7 justify-content-center">
    <div class="nav-item dropdown col-sm-3">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Season
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="">
        <li><a class="dropdown-item" href="#">2021</a></li>
        <li><a class="dropdown-item" href="#">2020</a></li>
        <li><a class="dropdown-item" href="#">2019</a></li>
      </ul>
    </div>
    <div class="nav-item dropdown col-sm-3">
    <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
    </div>
  </div>`;

  return bigRow;
};
export default createSearchControls;
