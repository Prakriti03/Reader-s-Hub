import { ILibrary } from "../interfaces/library.intergace";
import { BaseModel } from "./base.model";

export class LibraryModel extends BaseModel {
  static async getLibrary(userId: string, limit: string, offset: string) {
    const query = this.queryBuilder()
      .select(
        "Stories.*",
        "Users.username",
        this.queryBuilder().raw('array_agg("Genres".genre) as genres')
      )
      .from("Reading-List")
      .leftJoin("Stories", "Reading-List.stories_id", "Stories.id")
      .leftJoin("Users", "Stories.user_id", "Users.id")
      .leftJoin("Story-Genre", "Stories.id", "Story-Genre.stories_id")
      .leftJoin("Genres", "Story-Genre.genre_id", "Genres.id")
      .where("Reading-List.user_id", userId)
      .limit(parseInt(limit))
      .offset(parseInt(offset))
      .groupBy("Stories.id", "Users.username")
      .returning("*");

    const data = await query;
    return data;
  }

  static async addToLibrary(userId: string, library: ILibrary) {
    const entry = {
      user_id: userId,
      stories_id: library.storyId,
    };

    const query = this.queryBuilder()
      .insert(entry)
      .table("Reading-List")
      .returning("*");

    const data = await query;

    return data;
  }

  static async deleteFromLibrary(userId: string, storyId: string) {
    const query = this.queryBuilder().del().table("Reading-List").where({
      user_id: userId,
      stories_id: storyId,
    });
  }
}
