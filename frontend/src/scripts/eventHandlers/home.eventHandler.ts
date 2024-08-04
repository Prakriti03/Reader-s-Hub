import { dropdownItems, toggleMenu } from "../../views/home/home";
import {
  getStoriesFromSearch,
  showStoriesByGenre,
} from "../../views/home/storiesSection";
import { navigateTo } from "./auth.eventhandler";

export const homeEventListeners = () => {
  document.getElementById("menu-button")?.addEventListener("click", toggleMenu);
  document
    .getElementById("user-menu-button")
    ?.addEventListener("click", dropdownItems);

  document
    .getElementById("start-writing-button")
    ?.addEventListener("click", () => navigateTo("/write"));

  document
    .getElementById("browse-stories-button")
    ?.addEventListener("click", () => navigateTo("/stories"));

  document
    .getElementById("apply-filters")
    ?.addEventListener("click", showStoriesByGenre);

  document
    .getElementById("view-library")
    ?.addEventListener("click", () => navigateTo("/library"));

  document
    .getElementById("user-menu-profile")
    ?.addEventListener("click", () => navigateTo("/profile"));

  document.getElementById("view-writings")?.addEventListener("click", () => {
    navigateTo("/writings");
  });

  document
    .getElementById("logo-icon")
    ?.addEventListener("click", (event: Event) => {
      event.preventDefault();
      navigateTo("/home");
    });

  document
    .getElementById("seach-button")
    ?.addEventListener("click", getStoriesFromSearch);
};
