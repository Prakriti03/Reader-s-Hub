import { addStory } from "../../views/writings/addStory";

export const writingsEventListeners = () => {
  console.log("Inside writings event listener");
  document
    .getElementById("create-story")
    ?.addEventListener("submit", addStory);
};
