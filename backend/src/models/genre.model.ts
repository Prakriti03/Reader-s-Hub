import { IGenreStory } from "../interfaces/story.interface";
import { BaseModel } from "./base.model";

export class GenreModel extends BaseModel {
  static async getGenres() {
    const query = this.queryBuilder().select("*").table("Genres");

    const data = await query;

    return data;
  }

  static async addGenreStoryMap(genreStory: IGenreStory) {

    const query =  this.queryBuilder()
      .insert(genreStory)
      .table("Story-Genre");
    const data = await query;

    return data;
  }
}
