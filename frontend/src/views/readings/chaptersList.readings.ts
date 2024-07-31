import { getChaptersCount } from "../../services/chapters.services"; 
import { populateChaptersList } from "../../utils/populateTemplates";

export const getListOfChapters = async (storyId: string) => {
  try {
    const response = await getChaptersCount(storyId);
    const chapterCount = response.data;

    const htmlFile = await fetch("/src/views/readings/chaptersList.html").then(
      (response) => response.text()
    );
    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;

    const chaptersContainer = tempElement.querySelector("#chapters-container");

    if (chaptersContainer) {
      const chaptersHtml = populateChaptersList(storyId, chapterCount);
      chaptersContainer.innerHTML = chaptersHtml;
    }

    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error fetching chapter data:", error);
    throw error;
  }
};

