import { IStories } from "../interfaces/story.interface";
import { BaseModel } from "./base.model";


export class StoryModel extends BaseModel{
    static async createStory(story: IStories){
        const storyToCreate = {
            
        }
    }
    static async getStoryById(id:string){

    }
    static async updateStory(id:string, story : IStories){

    }
    static async deleteStory(id:string){

    }

}