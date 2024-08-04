import { fetchStories } from "../../services/stories.services";
import { populateLibraryTemplate } from "../../utils/populateTemplates";

export const displayWritings = async (limit:string,offset:string) => {
  
    try {
      const [data, htmlFile] = await Promise.all([
        fetchStories("/stories/author",offset,limit),
        fetch("/src/views/writings/writingsSection.html").then(response => response.text())
      ]);
  
      console.log(`stories from data : ${data}`)
  
      const libraryCardsHtml = populateLibraryTemplate(data);
  
      const tempElement = document.createElement("div");
  
      tempElement.innerHTML = htmlFile;
      const container = tempElement.querySelector("#writings-cards-container");
      if (container) {
        container.innerHTML = libraryCardsHtml;
      }
  
      return tempElement.innerHTML;
    } catch (error) {
      return error;
    }
  };