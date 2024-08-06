import UniversalRouter from "universal-router";
import { showStories } from "../views/home/storiesSection";
import { showLibrary } from "../views/home/librarySection";
import { fetchStoryData } from "../views/readings/getStory";
import { IParams } from "../interfaces/story.interfaces";
import { getListOfChapters } from "../views/readings/chaptersList.readings";
import { getChapter } from "../views/readings/chapters";
import { populateGenreList } from "../utils/populateTemplates";
import { displayProfile } from "../views/dashboards/user.dashboard";
import { displayWritings } from "../views/writings/writingsSection";
import { displayUserSettingsPage } from "../views/settings/user.settings";
import { displayEditStoryPage } from "../views/writings/updateStory";

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
    path: "/signup",
    action: async () =>
      await fetch("./src/views/signup/signup.html").then((response) =>
        response.text()
      ),
  },

  //for checking : combine all below to the home page
  {
    path: "/home",
    action: async () => {
      const response = await showStories();
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
  {
    path: "/settings",
    action: async () => {
      const response = await displayUserSettingsPage();
      return response;
    },
  },
  {
    path: "/stories/:id/edit",
    action: async ({ params }: { params: IParams }) => {
      const { id } = params;
      const response = await displayEditStoryPage(id!);
      return response;
    },
  },
];

const router = new UniversalRouter(routes);

export default router;
