import getMapData from "../handlers/getMapData.js";

export const createTeamMap = (teams) => {
  const { strStadiumLocation } = teams[0];

  getMapData(strStadiumLocation);
};
export default createTeamMap;
