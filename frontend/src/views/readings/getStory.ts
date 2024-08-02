import { displayStoriesById } from "../../services/stories.services";
import { populateStoryTemplate } from "../../utils/populateTemplates";

export const fetchStoryData = async (storyId: string) => {
  try {
    const response = await displayStoriesById(storyId);
    `response in fetchstorydata ${response.title}`;

    const htmlFile = await fetch("/src/views/readings/getStory.html").then(
      (response) => response.text()
    );

    const htmlString = populateStoryTemplate(htmlFile, response);
    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlString;
    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error fetching story data:", error);
    throw error;
  }
};
