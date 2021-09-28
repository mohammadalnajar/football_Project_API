import fetchData from './fetchData.js';

export const getMapData = async (country) => {
  const mymap = L.map('mapid').setView([0, 0], 13);
  const marker = L.marker([0, 0]).addTo(mymap);

  const attribution =
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  L.tileLayer(tileUrl, { attribution }).addTo(mymap);

  const data = await fetchData(
    `https://api.opencagedata.com/geocode/v1/json?q=${country}&key=e288f99820344951aadb967b654a1d01`
  );
  const { lat, lng } = data.results[0].geometry;
  marker.setLatLng([lat, lng]);
  mymap.setView([lat, lng]);
};
export default getMapData;
