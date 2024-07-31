import { BASE_URL, CURRENT_PATH, GET_POST_STORIES } from "../../constants/urls";
import { navigateTo } from "./auth.eventhandler";

export const readingsEventListeners = () => {
  document
    .getElementById("start-reading-button")
    ?.addEventListener("click", () => {
      navigateTo(`${CURRENT_PATH}/chapter`);
    });

  document.querySelectorAll(".read-chapter").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonElement = event.currentTarget as HTMLButtonElement;
      const chapterNumber = buttonElement.getAttribute("data-read-chapter");

      if (chapterNumber) {
        navigateTo(`${window.location.pathname}/${chapterNumber}`);
      }
    });
  });

  document.getElementById("prev-chapter")?.addEventListener("click", () => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const prevChapterNumber = parseInt(parts[4]) - 1;
    parts[parts.length - 1] = String(prevChapterNumber);
    const newPathName = parts.join("/");
    if (prevChapterNumber > 0) {
      navigateTo(newPathName);
    }
  });

  document.getElementById("next-chapter")?.addEventListener("click", () => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const nextChapterNumber = parseInt(parts[4]) + 1;
    parts[parts.length - 1] = String(nextChapterNumber);
    const newPathName = parts.join("/");
    navigateTo(newPathName);
  });
};
