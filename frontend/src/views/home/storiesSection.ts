import { displayStories } from "../../services/homePage.services";
import { populateTemplate } from "../../utils/populateTemplates";

//talk of the town
export const showStories = async () => {
  try {
    const data = await displayStories();
    const htmlFile = await fetch("/src/views/home/storiesSection.html").then(
      (response) => response.text()
    );

    const topStories = data.slice(0, 5); //display only top 5 stories

    const storyCardsHtml = populateTemplate(topStories);

    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;
    const container = tempElement.querySelector("#story-cards-container");
    if (container) {
      container.innerHTML = storyCardsHtml;
    }

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};
