import { IStories } from "../../interfaces/story.interfaces";
import { fetchStories } from "../../services/stories.services";
import {  populateTemplate } from "../../utils/populateTemplates";

export const displayWritings = async (limit:string="3",offset:string="0") => {
  
    try {
      const [data, htmlFile] = await Promise.all([
        fetchStories("/stories/author",offset,limit),
        fetch("/src/views/writings/writingsSection.html").then(response => response.text())
      ]);
  
      console.log(`stories from data : ${data}`)
      
      data.forEach((story:IStories)=> {

        console.log(`story id is : ${story.id}`)
      });
      const writingsCardsHtml = populateTemplate(data,"Continue Writing");
  
      const tempElement = document.createElement("div");
  
      tempElement.innerHTML = htmlFile;
      const container = tempElement.querySelector("#writings-cards-container");
      if (container) {
        container.innerHTML = writingsCardsHtml;
      }
  
      return tempElement.innerHTML;
    } catch (error) {
      return error;
    }
  };