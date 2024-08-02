import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { token } from "../utils/authHelpers";
import { IGenreStory } from "../interfaces/story.interfaces";

export const getGenres= async()=>{

    try{
      const response = await axios.get(`${BASE_URL}/genre`,{
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type" : "application/json",
        },
      });
      return response.data;
    }catch(error){
      return error
    }
  
  }

  export const mapGenreStory = async(genreStory : object)=>{
    try{
        const response = await axios.post(`${BASE_URL}/genre/story`, genreStory, {
          headers :{
            Authorization: `Bearer ${token}`,
          }
        })
        return response
    }catch(error){
        return error
    }
  }

