import { CURRENT_PATH } from "../../constants/urls";
import { navigateTo } from "./auth.eventhandler";

export const readingsEventListeners = () => {
  document
    .getElementById("start-reading-button")
    ?.addEventListener("click", () => {
      navigateTo(`${CURRENT_PATH}/chapter`);
    });
};
