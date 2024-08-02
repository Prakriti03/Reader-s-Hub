import { getChapterByNumber } from "../../services/chapters.services";
import { populateChapterTemplate } from "../../utils/populateTemplates";

export const getChapter = async (storyId: string, chapterNumber: number) => {
  try {
    const response = await getChapterByNumber(storyId, chapterNumber);


    const htmlFile = await fetch("/src/views/readings/chapters.html").then(
      (response) => response.text()
    );

    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlFile;

    const chapterTopicElement = tempElement.querySelector("#chapter-topic");
    if (chapterTopicElement) {
      chapterTopicElement.textContent = response.title;
    }

    const pdfContentElement = tempElement.querySelector("#pdf-content");
    if (pdfContentElement) {
      pdfContentElement.setAttribute("src", response.content_url);
    }

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};
