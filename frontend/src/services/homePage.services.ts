import axios from "axios";
import { BASE_URL, GET_LIBRARY, GET_POST_STORIES} from "../constants/urls";
import { getToken } from "../utils/token";
import { IStories } from "../interfaces/story.interfaces";
import { token } from "../utils/authHelpers";

export const displayStories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_POST_STORIES}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const displayLibrary = async () => {
  try {
    const token = getToken();

    const response = await axios.get(`${BASE_URL}${GET_LIBRARY}`, {
      headers: {
        Authorization : `Bearer ${token}`
      },
    });
    console.log(`response from backend : ${response}`)
    return response.data;
  } catch (error) {
    return error;
  }
};


