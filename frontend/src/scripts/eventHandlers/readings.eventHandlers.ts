import { GET_CHAPTER } from "../../constants/urls";
import { displayStoriesById } from "../../services/readStories.services";
import { navigateTo } from "./auth.eventhandler";


export const readingsEventListeners = () => {
    document.getElementById('start-reading-button')?.addEventListener("click",()=>{
        const currentPath = window.location.pathname;
        navigateTo(`${currentPath}/chapter`)
    })

};
