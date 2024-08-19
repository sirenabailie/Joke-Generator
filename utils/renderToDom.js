// Utility function to render HTML to a specific div
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.getElementById(divId); // Select the div by ID
  selectedDiv.innerHTML = htmlToRender; // Set the inner HTML of the div
};

export default renderToDom;
