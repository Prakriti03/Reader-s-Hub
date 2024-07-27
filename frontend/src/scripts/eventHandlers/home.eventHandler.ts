import { dropdownItems, toggleMenu } from "../../views/home/home";
import { navigateTo } from "./auth.eventhandler";

export const homeEventListeners = () => {
  document.getElementById("menu-button")?.addEventListener("click", toggleMenu);
  document
    .getElementById("user-menu-button")
    ?.addEventListener("click", dropdownItems);

  document
    .getElementById("start-writing-button")
    ?.addEventListener("click", () => navigateTo("/write"));
};
