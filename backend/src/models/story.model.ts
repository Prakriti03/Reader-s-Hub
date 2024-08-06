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
      .select(
        "Stories.*",
        "Users.username",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres')
      )
      .from("Stories")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .where("Stories.id", id)
      .groupBy("Stories.id", "Users.username")
      .first();

    const data = await query;

    return data;
  }

  static async getStoriesByUserId(
    userId: string,
    limit: string,
    offset: string
  ) {
    console.log(`for wriitng : limit : ${limit}, offset: ${offset}`);
    const query = this.queryBuilder()
      .select(
        "Stories.*",
        "Users.username",
        "Users.id as user_id",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres')
      )
      .from("Stories")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .where("Stories.user_id", userId)
      .groupBy("Stories.id", "Users.username", "Users.id")
      .limit(parseInt(limit))
      .offset(parseInt(offset));

    const data = await query;

    return data;
  }

  static async getStoriesByGenre(
    limit: number,
    offset: number,
    genre?: string,
    rating?: string
  ) {
    let query = this.queryBuilder()
      .select(
        "Stories.*",
        "Users.username",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres'),
        this.queryBuilder().raw('AVG("Reviews".rating) as avg_rating')
      )
      .from("Stories")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .leftJoin("Reviews", "Stories.id", "Reviews.stories_id")
      .groupBy("Stories.id", "Users.username");

    if (genre) {
      query = query.where("Genres.genre", genre);
      console.log(`query : ${query}`);
    }
    console.log(`rating is ${rating}`);

    if (rating!="NaN") {
      console.log("inside rating!!");
      query = query.having(
        this.queryBuilder().raw('AVG("Reviews".rating) >= ?', [
          parseInt(rating!),
        ])
      );
    }

    // query.limit(limit).offset(offset).returning("*");

    const data = await query;

    console.log(`get stories by gnere and rating : ${data}`);

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
        user_id: userId,
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
    const query = this.queryBuilder()
      .table("Stories")
      .count("* as count")
      .first();
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
