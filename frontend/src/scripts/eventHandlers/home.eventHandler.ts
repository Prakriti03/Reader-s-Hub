import { dropdownItems, toggleMenu } from "../../views/home/home";
import {  showStoriesByGenre } from "../../views/home/storiesSection";
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

    document.getElementById("apply-filters")?.addEventListener("click",showStoriesByGenre)
};
