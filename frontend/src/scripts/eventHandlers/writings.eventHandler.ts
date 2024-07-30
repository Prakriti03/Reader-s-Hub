import { addStory } from "../../views/writings/addStory";
import { initializeEditor } from "../../views/writings/writeStory";
import { convertToPdf } from "../../views/writings/writeStory";

export const writingsEventListeners = () => {
  console.log("Inside writings event listener");
  document.getElementById("create-story")?.addEventListener("submit", addStory);
  document
    .getElementById("chapter-topic")
    ?.addEventListener("focus", initializeEditor, { once: true });

  document
    .getElementById("publish-button")
    ?.addEventListener("click", convertToPdf);
};
