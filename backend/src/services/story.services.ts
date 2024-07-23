import { IStories } from "../interfaces/story.interface";
import { StoryModel } from "../models/story.model";

export function createStory(story : IStories, userId : string) {
  const data = StoryModel.createStory(story, userId as string);

  return data;
}
export function getStoryById(id: string) {
  const data = StoryModel.getStoryById(id);

  return data;
}
export function updateStory(id: string, storyToUpdate: IStories, userId : string) {
  const data = StoryModel.updateStory(id, storyToUpdate, userId );

  return data;
}
export function deleteStory(id: string, userId : string) {
  const data = StoryModel.deleteStory(id, userId);

  return data;
}
