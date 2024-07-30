import axios from "axios";
import { IStories } from "../interfaces/story.interfaces";
import { getToken } from "../utils/token";
import { BASE_URL, GET_CHAPTER, GET_POST_STORIES } from "../constants/urls";
import { authGet, authPost, token } from "../utils/authHelpers";

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

export const displayChaptersByStory = async (storyId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_POST_STORIES}/${storyId}${GET_CHAPTER}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching chapters by story ID:", error);
    throw error;
  }
};

// export async function displayChaptersByStory(storyId: string) {

//   try {
//     const response = await authGet(`${GET_POST_STORIES}/${storyId}${GET_CHAPTER}`, token!);

//     return response;
//   } catch (error) {
//     return error;
//   }
// }