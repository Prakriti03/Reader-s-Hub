import axios from "axios";
import { BASE_URL, GET_CHAPTER, GET_POST_STORIES } from "../constants/urls";
import { token } from "../utils/authHelpers";
import { IChapterPayload } from "../interfaces/story.interfaces";
import { getToken } from "../utils/token";

export const getChaptersCount = async (storyId: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${GET_POST_STORIES}/${storyId}${GET_CHAPTER}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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

export const deleteChapter = async (storyId: string, chapterNumber: number) => {
  try {
    await axios.delete(
      //use auth helper
      `${BASE_URL}${GET_POST_STORIES}/${storyId}${GET_CHAPTER}/${chapterNumber}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    location.reload();
  } catch (error) {
    console.error("Error deleting chapter", error);
    throw error;
  }
};

export const addChapter = async (
  payload: IChapterPayload,
  storyId: string,
  number: number
) => {
  const response = await axios.post(
    `${BASE_URL}${GET_POST_STORIES}/${storyId}${GET_CHAPTER}/${number}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export async function getChapterByNumber(
  storyId: string,
  chapterNumber: number
) {
  try {

    const response = await axios.get(
      `${BASE_URL}${GET_POST_STORIES}/${storyId}${GET_CHAPTER}/${chapterNumber}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    //response is array of objects???
    console.log(response.data[0])
    return response.data[0];
  } catch (error) {
    console.error("Error fetching chapters by chapter ID:", error);
    throw error;
  }
}
