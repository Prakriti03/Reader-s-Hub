import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { token } from "../utils/authHelpers";
import { IReview, Review } from "../interfaces/story.interfaces";


export const addComments = async(storyId:string, comment: Review)=>{
    try {
        const response = await axios.post(
          `${BASE_URL}/review/${storyId}`,
          comment,
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
}