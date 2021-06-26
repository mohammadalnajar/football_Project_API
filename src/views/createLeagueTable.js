import setAttributes from "../utils/setAttributes.js";
import createDomElement from "../utils/createDomElement.js";
import fetchData from "../handlers/fetchData.js";

export const createLeagueTable = async (league) => {
  const tableDiv = createDomElement("div", {
    className: "tab-pane fade",
    id: "nav-profile",
  });
  setAttributes(tableDiv, {
    role: "tabpanel",
    "aria-labelledby": "nav-profile-tab",
  });
  let output = ` <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Team Name</th>
      <th scope="col">P</th>
      <th scope="col">W</th>
      <th scope="col">D</th>
      <th scope="col">L</th>
      <th scope="col">F</th>
      <th scope="col">A</th>
      <th scope="col">GD</th>
      <th scope="col">PTS</th>
    </tr>
  </thead>
  <tbody class="tbody"> `;
  const { table } = await fetchData(
    `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${league.dataset.id}&s=2020-2021`
  );
  table.forEach((team, i) => {
    const {
      strTeamBadge,
      strTeam,
      intPlayed,
      intWin,
      intDraw,
      intLoss,
      intGoalsFor,
      intGoalsAgainst,
      intGoalDifference,
      intPoints,
    } = team;
    output += `
    <tr>
  <th scope="row">${i + 1}</th>
  <td scope="row"><img src=${strTeamBadge} alt=""></td>
  <td>${strTeam}</td>
  <td>${intPlayed}</td>
  <td>${intWin}</td>
  <td>${intDraw}</td>
  <td>${intLoss}</td>
  <td>${intGoalsFor}</td>
  <td>${intGoalsAgainst}</td>
  <td>${intGoalDifference}</td>
  <td>${intPoints}</td>
</tr>

    `;
  });
  output += `</tbody>
  </table>`;
  tableDiv.innerHTML = output;
  return tableDiv;
};
export default createLeagueTable;
