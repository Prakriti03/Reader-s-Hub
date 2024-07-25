import { addEventListeners } from "./eventHandlers/auth.eventhandler";
import router from "./routes";

const render = async (pathname: string) => {
  const content = await router.resolve({ pathname });

  if (typeof content !== "string") {
    console.error("Content is not a string");
    return;
  }

  const contentElement = document.getElementById("content");

  if (contentElement) {
    contentElement.innerHTML = content;

    addEventListeners();
  } else {
    console.error("Content element not found");
  }
};

export default render;