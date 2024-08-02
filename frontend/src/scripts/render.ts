import { addEventListeners } from "./eventHandlers/auth.eventhandler";
import router from "./routes";



const render = async (pathname: string) => {

  const url = new URL(pathname, window.location.origin);
  const context = {
    pathname: url.pathname,
    querystring: url.search,
  };
  
  const content = await router.resolve(context);

  if (typeof content !== "string") {
    console.error("Content is not a string");
    return;
  }

  const contentElement = document.getElementById("app");

  if (contentElement) {
    contentElement.innerHTML = content;

    addEventListeners();
  } else {
    console.error("Content element not found");
  }
};

export default render;