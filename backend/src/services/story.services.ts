import { IStories } from "../interfaces/story.interface";
import { StoryModel } from "../models/story.model";

export function createStory(story : IStories, userId : string) {
  const data = StoryModel.createStory(story, userId as string);

  return data;
}
export const getStoryById=async(id: string)=> {
  const data = await StoryModel.getStoryById(id);

  return data;
}
export const getStories = async(genre?:string)=>{

  if(genre){

    const data = await StoryModel.getStoriesByGenre(genre);
  
    return data;
  }else{
    const data = await StoryModel.getStories();
    
    return data;
  }
}
export function updateStory(id: string, storyToUpdate: IStories, userId : string) {
  const data = StoryModel.updateStory(id, storyToUpdate, userId );

  return data;
}
export function deleteStory(id: string, userId : string) {
  const data = StoryModel.deleteStory(id, userId);

  return data;
}
