import { IStories } from "../interfaces/story.interface";
import { StoryModel } from "../models/story.model";

export function createStory(story : IStories) {
  const data = StoryModel.createStory(story);

  return data;
}
export function getStoryById(id: string) {
  const data = StoryModel.getStoryById(id);

  return data;
}
export function updateStory(id: string, storyToUpdate: IStories) {
  const data = StoryModel.updateStory(id, storyToUpdate);

  return data;
}
export function deleteStory(id: string) {
  const data = StoryModel.deleteStory(id);

  return data;
}
