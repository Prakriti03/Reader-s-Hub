import axios from "axios";
import { BASE_URL, GET_LIBRARY, GET_POST_STORIES } from "../constants/urls";
import { getToken } from "../utils/token";
import { token } from "../utils/authHelpers";

export const displayStories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_POST_STORIES}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`response for displaying stories : ${response.data}`)
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
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
