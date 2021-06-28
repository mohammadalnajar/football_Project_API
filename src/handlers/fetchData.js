import handelError from "./handelError.js";

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    handelError(err);

    console.log(err.message);
  }
};
export default fetchData;
