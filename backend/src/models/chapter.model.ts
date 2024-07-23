import { IChapter } from "../interfaces/chapter.interface";
import { BaseModel } from "./base.model";

export class ChapterModel extends BaseModel {
  static async create(chapter: IChapter) {
    const chapterToCreate = {
      id: chapter.id,
      stories_id: chapter.stories_id,
      number: chapter.number,
      title: chapter.title,
      content_url: chapter.content_url,
      status: chapter.status,
      image_url: chapter.image_url,
    };
    const query = this.queryBuilder().insert(chapterToCreate).table("Chapters");
    const data = await query;

    return data;
  }
  static async getById(id: string) {
    const query = this.queryBuilder()
      .select("*")
      .table("Chapters")
      .where("id", id);

    const data = await query;

    return data;
  }
  static async update(id: string, chapterToUpdate: IChapter) {
    const updatedChapter = {
      title: chapterToUpdate.title,
      content_url: chapterToUpdate.content_url,
      image_url: chapterToUpdate.image_url,
      published_date: new Date().toISOString(), //convert to camel case
    };

    const query = this.queryBuilder()
      .update(updatedChapter)
      .table("Chapters")
      .where({
        id: id,
      });

    const data = await query;

    return data;
  }
  static async delete(id: string) {
    const query = this.queryBuilder()
      .del()
      .table("Chapters")
      .where("id", id)
      .returning("*");

    const data = await query;

    return data;
  }
}
