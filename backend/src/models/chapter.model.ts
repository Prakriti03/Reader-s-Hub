import { IChapter } from "../interfaces/chapter.interface";
import { BaseModel } from "./base.model";

export class ChapterModel extends BaseModel {
  static async create(
    chapter: IChapter,
    chapterNumber: number,
    storyId: string
  ) {
    const chapterToCreate = {
      id: chapter.id,
      stories_id: storyId,
      number: chapterNumber,
      title: chapter.title,
      content_url: chapter.content_url,
      status: chapter.status,
      image_url: chapter.image_url,
    };
    const query = this.queryBuilder()
      .insert(chapterToCreate)
      .table("Chapters")
      .where({
        stories_id: storyId,
        number: chapter.number,
      });
    const data = await query;

    return data;
  }
  static async getByNumber(number: number, story_id: string) {
    console.log(`story id : ${story_id}`);

    const query = this.queryBuilder().select("*").table("Chapters").where({
      stories_id: story_id,
      number: number,
    });

    const data = await query;

    return data;
  }
  static async update(
    chapterToUpdate: IChapter,
    number: number,
    storyId: string
  ) {
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
        number: number,
        stories_id: storyId,
      });

    const data = await query;

    return data;
  }
  static async delete(number: number, storyId: string) {
    const query = this.queryBuilder()
      .del()
      .table("Chapters")
      .where({
        number: number,
        stories_id: storyId,
      })
      .returning("*");

    const data = await query;

    return data;
  }
}
