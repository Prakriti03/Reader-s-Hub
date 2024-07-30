import axios from "axios";
import { IStories } from "../interfaces/story.interfaces";
import { getToken } from "../utils/token";
import { BASE_URL, GET_POST_STORIES } from "../constants/urls";
import { authPost, token } from "../utils/authHelpers";

// export async function addStoryWritings(storyData: FormData) {

//   try {
//     const response = await authPost(GET_POST_STORIES, storyData, token!,'');

//     return response.data;
//   } catch (error) {
//     return error;
//   }
// }

export async function addStoryWritings(
  storyData : FormData
) {
  try {
    const response = await axios.post(`${BASE_URL}${GET_POST_STORIES}`, storyData,{
      headers:{
        'Authorization' : `Bearer ${token}`,
        'Content-Type' : 'multipart/form-data'
      }
    })
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function addChapters() {

}
