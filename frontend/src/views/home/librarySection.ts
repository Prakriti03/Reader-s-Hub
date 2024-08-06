import {
  
  populateTemplate,
} from "../../utils/populateTemplates";
import { addToLibrary } from "../../services/library.services";
import { fetchStories } from "../../services/stories.services";
import { IStories } from "../../interfaces/story.interfaces";

export const showLibrary = async () => {
  //  offset = (page - 1) * parseInt(LIMIT);

  try {
    // const data = await displayLibrary();
    const [data, htmlFile] = await Promise.all([
      fetchStories("/library"),
      fetch("/src/views/home/librarySection.html").then((response) =>
        response.text()
      ),
    ]);

    console.log(`stories from library : ${data}`);
  
    data.forEach((story: IStories) => {
      console.log(`Story ID: ${story.id}`);
    });

    const libraryCardsHtml = populateTemplate(data, "Continue Reading");

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

export const addInLibrary = async () => {
  try {
    const storyId = window.location.pathname.split("/")[2];

    console.log(storyId);

    const addStoryToLibrary = {
      storyId: storyId,
    };

    const data = await addToLibrary(addStoryToLibrary);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
