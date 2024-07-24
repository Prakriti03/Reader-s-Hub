import { deleteFromLibrary } from "../controller/library.controller";
import { ILibrary } from "../interfaces/library.intergace";
import { BaseModel } from "./base.model";

export class LibraryModel extends BaseModel {
  static async getLibrary(userId: string) {
    const query = this.queryBuilder()
      .select("Stories.*")
      .from("Stories")
      .join("reading_list", "Stories.id", "=", "reading_list.stories_id")
      .where("reading_list.user_id", userId);

    const data = await query;
    return data;
  }

  static async addToLibrary(userId: string, library: ILibrary) {
    const entry = {
      user_id: userId,
      stories_id: library.stories_id,
    };

    const query = this.queryBuilder().insert(entry).table("Reading-List");

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
