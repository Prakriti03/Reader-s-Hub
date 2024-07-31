import axios from "axios";
import { BASE_URL, GET_LIBRARY, GET_POST_STORIES} from "../constants/urls";
import { getToken } from "../utils/token";


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
    return response.data;
  } catch (error) {
    return error;
  }
};


