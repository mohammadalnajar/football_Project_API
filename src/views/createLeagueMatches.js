import setAttributes from "../utils/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";
import fetchData from "../handlers/fetchData.js";

export const createLeagueMatches = async (league) => {
  const matchesDiv = createDomElement("div", {
    className: "tab-pane fade",
    id: "nav-contact",
  });
  setAttributes(matchesDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-contact-tab",
  });
  let output = ` <table class="table table-hover">
  <thead>
        <tr>
          <th scope="col">#</th>
          <th style="text-align:center" scope="col">Home</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th style="text-align:center" scope="col">Away</th>
          <th scope="col">datum</th>
        </tr>
      </thead>
  <tbody class="tbody"> `;
  const { events } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${league.dataset.id}`
  );
  events.forEach((event) => {
    const {
      dateEvent,
      intAwayScore,
      intHomeScore,
      intRound,
      strAwayTeam,
      strHomeTeam,
    } = event;
    output += `
    <tr>
          <th scope="row">FT</th>
          <td  style="text-align:center">${strHomeTeam}</td>
          <td>
            <img
              src="https://www.thesportsdb.com/images/media/team/badge/xqwpup1473502878.png/tiny"
              alt=""
            />
          </td>
          <td>${intHomeScore}</td>
          <td>VS</td>
          <td>${intAwayScore}</td>
          <td>
            <img
              src="https://www.thesportsdb.com/images/media/team/badge/vwvwrw1473502969.png/tiny"
              alt=""
            />
          </td>
          <td style="text-align:center" >${strAwayTeam}</td>
          <td>${dateEvent}</td>
        </tr>

    `;
  });
  output += `</tbody>
  </table>`;
  matchesDiv.innerHTML = output;
  return matchesDiv;
};
export default createLeagueMatches;
