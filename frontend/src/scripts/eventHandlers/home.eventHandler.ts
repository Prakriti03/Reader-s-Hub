import { dropdownItems, toggleMenu } from "../../views/home/home";
import {
  getStoriesFromSearch,
  showStoriesByGenre,
} from "../../views/home/storiesSection";
import {
  deleteUserAccount,
  displayUserSettingsPage,
  saveUserData,
} from "../../views/settings/user.settings";
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

  document
    .getElementById("view-settings")
    ?.addEventListener("click", (event: Event) => {
      event.preventDefault();
      navigateTo("/settings");
    });

  document.querySelectorAll(".save-btn").forEach((button) => {
    button.addEventListener("click", async (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLElement;
      const setting = target.dataset.setting as string;
      saveUserData(setting);
    });
  });

  document
    .getElementById("delete-account-btn")
    ?.addEventListener("click", deleteUserAccount);
};
