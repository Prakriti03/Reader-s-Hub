import UniversalRouter from "universal-router";
import { isAuthenticated } from "../utils/token";
import { navigateTo } from "./eventHandlers/auth.eventhandler";
import { addHtmlSections } from "../views/home/home";
import { showStories } from "../views/home/storiesSection";
import { showLibrary } from "../views/home/librarySection";
import { fetchStoryData } from "../views/readings/getStory";
import { displayStoriesById } from "../services/readStories.services";
import { IParams } from "../interfaces/story.interfaces";
import { getListOfChapters } from "../views/readings/chaptersList.readings";

const routes = [
  {
    path: "/",
    action: async () => {
      return await fetch("./src/views/login/login.html").then((response) =>
        response.text()
      );
    },
  },
  {
    path: "/home",
    action: async () => {
      if (!isAuthenticated()) {
        return navigateTo("/login");
      }
      return await fetch("./src/views/home/home.html").then((response) =>
        response.text()
      );
    },
  },
  {
    path: "/login",
    action: async () =>
      await fetch("./src/views/login/login.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/signup",
    action: async () =>
      await fetch("./src/views/signup/signup.html").then((response) =>
        response.text()
      ),
  },

  //for checking : combine all below to the home page
  {
    path: "/stories",
    action: async () => {
      const response = await showStories();
      return response;
    },
  },
  {
    path: "/stories/:id",
    action: async({params}:{params:IParams})=> {
      const {id} = params;
      const response = await fetchStoryData(id!);
      console.log(`response is ${response}`)
      return response;
    },
      
  },
  {
    path: "/stories/:id/chapter",
    action: async({params}:{params:IParams})=> {
      const {id} = params;
      const response = await getListOfChapters(id!);
      console.log(`response is ${response}`)
      return response;
    },
      
  },
  {
    path: "/library",
    action: async () => {
      const response = await showLibrary();
      console.log(`final output = ${response}`);

      return response;
    },
  },

  {
    path: "/write",
    action: async () =>
      await fetch("./src/views/writings/addStory.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/writing-interface",
    action: async () =>
      await fetch("./src/views/writings/writeStory.html").then((response) =>
        response.text()
      ),
  },
];

const router = new UniversalRouter(routes);

export default router;
