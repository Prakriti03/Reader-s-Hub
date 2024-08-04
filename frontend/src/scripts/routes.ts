import UniversalRouter from "universal-router";
import { isAuthenticated } from "../utils/token";
import { navigateTo } from "./eventHandlers/auth.eventhandler";
import { showStories } from "../views/home/storiesSection";
import { showLibrary } from "../views/home/librarySection";
import { fetchStoryData } from "../views/readings/getStory";
import { IParams } from "../interfaces/story.interfaces";
import { getListOfChapters } from "../views/readings/chaptersList.readings";
import { getChapterByNumber } from "../services/chapters.services";
import { getChapter } from "../views/readings/chapters";
import { populateGenreList } from "../utils/populateTemplates";
import { displayProfile } from "../views/dashboards/user.dashboard";
import { displayWritings } from "../views/writings/writingsSection";

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
    action: async (context: any) => {
      const urlParams = new URLSearchParams(context.querystring);
      const page = urlParams.get("page") ? parseInt(urlParams.get("page")!) : 1;
      const response = await showStories(page);
      return response;
    },
  },
  {
    path: "/stories/:id",
    action: async ({ params }: { params: IParams }) => {
      const { id } = params;
      const response = await fetchStoryData(id!);
      return response;
    },
  },
  {
    path: "/stories/:id/chapter",
    action: async ({ params }: { params: IParams }) => {
      const { id } = params;
      const response = await getListOfChapters(id!);
      return response;
    },
  },
  {
    path: "/stories/:id/chapter/:number",
    action: async ({ params }: { params: IParams }) => {
      const { id, number } = params;
      const response = await getChapter(id!, number!);

      return response;
    },
  },

  {
    path: "/stories/:id/chapter/:number/writing-interface",
    action: async () => {
      try {
        const htmlContent = await fetch("/src/views/writings/writeStory.html");

        return htmlContent.text();
      } catch (error) {
        return `<p>Error loading content</p>`;
      }
    },
  },
  {
    path: "/library",
    action: async () => {
      const response = await showLibrary();

      return response;
    },
  },

  {
    path: "/write",
    action: async () => {
      const response = await populateGenreList();
      return response;
    },
  },
  {
    path: "/profile",
    action: async () => {
      // const {id} = params;
      const response = await displayProfile();
      return response;
    },
  },
  {
    path: "/writings",
    action: async () => {
      const response = await displayWritings();
      return response;
    },
  },
];

const router = new UniversalRouter(routes);

export default router;
