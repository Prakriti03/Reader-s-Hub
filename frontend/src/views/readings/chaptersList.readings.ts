import { getChaptersCount } from "../../services/chapters.services"; 
import { displayStoriesById } from "../../services/stories.services";
import { populateChaptersList } from "../../utils/populateTemplates";
import { getLoggedInUserID } from "../../utils/userId";

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
    const addChapterButtonContainer = tempElement.querySelector("#add-chapter-button-container");

    const userId = await getLoggedInUserID();
    
    const storyData = await displayStoriesById(storyId);
    const storyAuthorId = storyData.user_id;

    if (chaptersContainer) {
      const chaptersHtml = populateChaptersList(storyId, chapterCount,userId, storyAuthorId);
      chaptersContainer.innerHTML = chaptersHtml;
    }

    if (addChapterButtonContainer && userId === storyAuthorId) {
      const addButton = document.createElement("button");
      addButton.className = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
      addButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>Add Chapter';
      addButton.id = `add-chapter-button`;
      addChapterButtonContainer.appendChild(addButton);
    }

    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error fetching chapter data:", error);
    throw error;
  }
};

