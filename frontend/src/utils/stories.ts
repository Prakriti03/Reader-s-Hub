import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { token } from "./authHelpers";
import { LIMIT } from "../constants/writings";
import { IStories } from "../interfaces/story.interfaces";

export async function fetchStories(endpoint: string, offset: number): Promise<any> {
    try {
      const storyResponse = await axios.get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          limit: LIMIT,
          offset: offset,
        },
      });
  
      const stories = storyResponse.data;
  
      const mergedDataPromises = stories.map(async (story: IStories) => {
        const reviewResponse = await axios.get(`${BASE_URL}/review/${story.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
  
        const reviews = reviewResponse.data;
        return {
          ...story,
          reviews: reviews,
        };
      });
  
      const mergedData = await Promise.all(mergedDataPromises);
  
      return mergedData;
    } catch (error) {
      return error;
    }
  }
  