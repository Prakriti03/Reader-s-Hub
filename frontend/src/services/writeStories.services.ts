import axios from "axios";
import { IStories } from "../interfaces/story.interfaces";
import { getToken } from "../utils/token";
import { BASE_URL, GET_POST_STORIES } from "../constants/urls";

export async function addStoryWritings(storyData: IStories) {
  try {
    const token = getToken();

    const response  = await axios.post(
      `${BASE_URL}${GET_POST_STORIES}`,
      storyData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
