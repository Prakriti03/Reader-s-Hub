import { IStories } from "../interfaces/story.interface";
import { BaseModel } from "./base.model";

export class StoryModel extends BaseModel {
  static async createStory(story: IStories, userId: string) {
    const storyToCreate = {
      id: story.id,
      title: story.title,
      description: story.description,
      user_id: userId,
      cover_image_url: story.cover_image_url,
    };

    const query = this.queryBuilder().insert(storyToCreate).table("Stories");
    const data = await query;

    return data;
  }

  static async getStoryById(id: string) {
    const query = this.queryBuilder()
      .select("*")
      .table("Stories")
      .where("id", id).first();
    const data = await query;

    return data;
  }
  static async updateStory(id: string, story: IStories, userId: string) {
    const updatedStory = {
      title: story.title,
      description: story.description,
      cover_image_url: story.cover_image_url,
    };

    const query = this.queryBuilder()
      .update(updatedStory)
      .table("Stories")
      .where({
        id: id,
        user_id: userId, //change snake case to camel case
      })
      .returning("*");

    const data = await query;

    return data;
  }
  static async deleteStory(id: string, userId: string) {
    const query = this.queryBuilder()
      .delete()
      .table("Stories")
      .where({
        id: id,
        user_id: userId,
      })
      .returning("*");

    const data = await query;

    return data;
  }
}
