import { displayLibrary } from "../../services/homePage.services";
import { populateTemplate } from "../../utils/populateTemplates";

//talk of the town
export const showLibrary = async () => {
  try {
    const data = await displayLibrary();
    console.log(`data = ${data}`);
    const htmlFile = await fetch("/src/views/home/librarySection.html").then(
      (response) => response.text()
    );

    const libraryCardsHtml = populateTemplate(data);

    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;
    const container = tempElement.querySelector("#library-cards-container");
    if (container) {
      container.innerHTML = libraryCardsHtml;
    }

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};
