import axios from "axios";
import { BASE_URL, GET_LIBRARY, GET_POST_STORIES } from "../constants/urls";
import { getToken } from "../utils/token";
import { token } from "../utils/authHelpers";
import { INITIAL_OFFSET, LIMIT } from "../constants/writings";
import { ILibrary } from "../interfaces/story.interfaces";

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

export const addToLibrary = async (libraryData:ILibrary) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${GET_LIBRARY}`,
      libraryData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
