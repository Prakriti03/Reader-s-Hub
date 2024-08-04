import axios from "axios";
import { BASE_URL, GET_POST_STORIES } from "../constants/urls";
import { token } from "../utils/authHelpers";
import { IGenre, IStories } from "../interfaces/story.interfaces";
import { INITIAL_OFFSET, LIMIT } from "../constants/writings";

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
    const storyResponse = await axios.get(
      `${BASE_URL}${GET_POST_STORIES}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const story = storyResponse.data;

    const reviewResponse = await axios.get(`${BASE_URL}/review/${story.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const reviews = reviewResponse.data;

    console.log(reviews);

    return {
      ...story,
      reviews: reviews,
    };
  } catch (error) {
    return error;
  }
};

export const filterByGenre = async (genre: string, offset: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/stories`, {
      params: {
        limit: LIMIT,
        offset: offset,
        genre: genre,
      },
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

export async function fetchStories(
  endpoint: string,
  offset: string = "0",
  limit: string = "50",
  searchString: string = ""
): Promise<any> {
  try {
    const storyResponse = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        limit: limit,
        offset: offset,
        searchString: searchString,
      },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
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

export const countStories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${GET_POST_STORIES}/count`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`count of stories : ${response.data}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
