import { displayStories } from "../../services/homePage.services";
import { loadSection } from "../../utils/loadSections";

let menuOpen = false;

//mobile menu
export const toggleMenu = () => {
  const button = document.getElementById("menu-button") as HTMLButtonElement;
  const openIcon = document.getElementById("open-icon") as HTMLElement;
  const closeIcon = document.getElementById("close-icon") as HTMLElement;
  const menu = document.getElementById("mobile-menu") as HTMLElement;

  menuOpen = !menuOpen;
  if (menuOpen) {
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");
    menu.classList.remove("hidden");
  } else {
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
    menu.classList.add("hidden");
  }
};

export const dropdownItems = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (dropdownMenu) {
    dropdownMenu.classList.toggle("hidden");
    dropdownMenu.classList.toggle("block");
  }
};



export const addHtmlSections = async () => {
  await loadSection(
    "/src/views/home/storiesSection.html",
    "talk"
  );
  return await fetch("/src/views/home/home.html").then((response) =>
    response.text()
  );
};
