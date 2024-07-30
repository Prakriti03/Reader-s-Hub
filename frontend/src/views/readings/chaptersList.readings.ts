import { displayChaptersByStory } from "../../services/readStories.services";
import { populateChaptersList } from "../../utils/populateTemplates";

export const getListOfChapters = async (storyId: string) => {
  try {
    const response = await displayChaptersByStory(storyId);
    const chapterCount = response.data;

    console.log(`Response in getListOfChapter : ${response.data}`)

    const htmlFile = await fetch("/src/views/readings/chaptersList.html").then(
      (response) => response.text()
    );
    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;

    const chaptersContainer = tempElement.querySelector("#chapters-container");

    if (chaptersContainer) {
      const chaptersHtml = populateChaptersList(chapterCount);
      chaptersContainer.innerHTML = chaptersHtml;
    }

    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error fetching chapter data:", error);
    throw error;
  }
};
