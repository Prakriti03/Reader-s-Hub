import { IStories } from "../interfaces/story.interface";
import { BaseModel } from "./base.model";

export class StoryModel extends BaseModel {
  static async createStory(story: IStories, userId: string) {
    const storyToCreate = {
      title: story.title,
      description: story.description,
      user_id: userId,
      cover_image_url: story.coverImageUrl,
    };

    const query = await this.queryBuilder()
      .insert(storyToCreate)
      .table("Stories")
      .returning(["id", "title"]);

    return query;
  }

  static async getStories(limit: number, offset: number) {
    const query = this.queryBuilder()
      .select(
        "Stories.*",
        "Users.username",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres')
      )
      .from("Stories")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .groupBy("Stories.id", "Users.username")
      .limit(limit)
      .offset(offset)
      .returning("*");

    const data = await query;

    return data;
  }

  static async getStoryById(id: string) {
    const query = this.queryBuilder()
      .select("*")
      .table("Stories")
      .where("id", id)
      .first();
    const data = await query;

    return data;
  }

  static async getStoriesByGenre(
    limit: number,
    offset: number,
    genre?: string
  ) {
    const query = this.queryBuilder()
      .select(
        "Stories.*",
        "Users.username",
        "Genres.genre",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres')
      )
      .from("Stories")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .where("Genres.genre", genre)
      .groupBy("Stories.id", "Users.username", "Genres.genre")
      .limit(limit)
      .offset(offset)
      .returning("*");

    const data = await query;

    return data;
  }

  static async updateStory(id: string, story: IStories, userId: string) {
    const updatedStory = {
      title: story.title,
      description: story.description,
      cover_image_url: story.coverImageUrl,
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

  static async getTotalStoriesCount() {
    const query = this.queryBuilder().table("Stories").count('* as count').first();
    const data = await query;

    return data.count;
  }

  static async getTotalStoriesCountByGenre(genre: string) {
    const query = this.queryBuilder()
      .table("Stories")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .where("Genres.genre", genre)
      .count("*")
      .first();

    const data = await query;

    return data.count;
  }
}
