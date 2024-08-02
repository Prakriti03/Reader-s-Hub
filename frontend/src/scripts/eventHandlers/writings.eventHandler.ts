import {
  deleteChapter,
  getChaptersCount,
} from "../../services/chapters.services";
import { addGenre, addStory } from "../../views/writings/addStory";
import { initializeEditor, saveContent } from "../../views/writings/writeStory";
import { navigateTo } from "./auth.eventhandler";

export const writingsEventListeners = () => {


  document
    .getElementById("add-genre-button")
    ?.addEventListener("click", addGenre);

  document.getElementById("create-story")?.addEventListener("submit", addStory);
  
  document
    .getElementById("chapter-topic")
    ?.addEventListener("focus", initializeEditor, { once: true });

  document.getElementById("publish-button")?.addEventListener("click", () => {
    const pathParts = window.location.pathname.split("/");
    const storyId = pathParts[2];
    const chapterNumber = pathParts[4];

    saveContent(storyId, parseInt(chapterNumber));
  });

  document
    .getElementById("add-chapter-button")
    ?.addEventListener("click", async () => {
      const pathParts = window.location.pathname.split("/");
      const storyId = pathParts[2];

      const chapterCount = await getChaptersCount(storyId);
      const nextChapterNumber = parseInt(chapterCount.data) + 1;

      navigateTo(
        `${window.location.pathname}/${nextChapterNumber}/writing-interface`
      );
    });

  document.querySelectorAll(".delete-chapter").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonElement = event.currentTarget as HTMLButtonElement;
      const storyId = buttonElement.getAttribute("data-story");
      const chapterNumber = Number(buttonElement.getAttribute("data-chapter"));
      if (chapterNumber) {
        deleteChapter(storyId!, chapterNumber);
      }
    });
  });
};
