import { off } from "process";
import { IStories } from "../interfaces/story.interface";
import { StoryModel } from "../models/story.model";

export function createStory(story: IStories, userId: string) {
  const data = StoryModel.createStory(story, userId as string);

  return data;
}
export const getStoryById = async (id: string) => {
  const data = await StoryModel.getStoryById(id);

  return data;
};
export const getStories = async (
  limit: number,
  offset: number,
  genre?: string
) => {
  if (genre) {
    const data = await StoryModel.getStoriesByGenre(limit, offset, genre);

    return data;
  } else {
    const data = await StoryModel.getStories(limit, offset);

    return data;
  }
};

export function getStoriesByUserId(userId: string,limit:string,offset:string) {
  const data = StoryModel.getStoriesByUserId(userId,limit,offset);

  return data;
}

export function updateStory(
  id: string,
  storyToUpdate: IStories,
  userId: string
) {
  const data = StoryModel.updateStory(id, storyToUpdate, userId);

  return data;
}
export function deleteStory(id: string, userId: string) {
  const data = StoryModel.deleteStory(id, userId);

  return data;
}
export function getTotalStoriesCount() {
  const data = StoryModel.getTotalStoriesCount();

  return data;
}
export function getTotalStoriesCountByGenre(genre: string) {
  const data = StoryModel.getTotalStoriesCountByGenre(genre);

  return data;
}
