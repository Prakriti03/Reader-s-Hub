import { BaseModel } from "./base.model";

export class SearchModel extends BaseModel {
  static async getStories(
    // limit: number = 12,
    // offset: number = 0,
    searchString: string
  ) {
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
      .where("Stories.title", "LIKE", `${searchString}%`)
      .groupBy("Stories.id", "Users.username")
      //   .limit(limit)
      //   .offset(offset)
      .returning("*");

    const data = await query;

    return data;
  }
}
