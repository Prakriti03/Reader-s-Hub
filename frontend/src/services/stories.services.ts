import axios from "axios";
import { BASE_URL, GET_POST_STORIES } from "../constants/urls";
import { token } from "../utils/authHelpers";
import { IGenre } from "../interfaces/story.interfaces";

export async function addStoryWritings(storyData: FormData) {
  try {
    const response = await axios.post(
      `${BASE_URL}${GET_POST_STORIES}`,
      storyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const displayStoriesById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_POST_STORIES}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const filterByGenre = async (genre: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/stories?genre=${genre}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
