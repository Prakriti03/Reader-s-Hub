import { IChapter } from "../interfaces/chapter.interface";
import { BaseModel } from "./base.model";

export class ChapterModel extends BaseModel {
  static async create(
    chapter: IChapter,
    storyId: string
  ) {

    console.log("Inside chapter model")
    const chapterToCreate = {
      id: chapter.id,
      stories_id: storyId,
      number: chapter.number,
      title: chapter.title,
      content_url: chapter.contentUrl,
    };
    console.log(`chapter id : ${chapter.id}`)
    console.log(`stories_id : ${storyId}`)
    console.log(`number : ${chapter.number}`)
    console.log(`stories_id : ${storyId}`)


    const query = this.queryBuilder().insert(chapterToCreate).table("Chapters");

    const data = await query;

    console.log(`data  : ${data}`)

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
      content_url: chapterToUpdate.contentUrl,
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
  static async countChaptersByStory(storyId: string) {
    const query = this.queryBuilder()
      .count("* as count")
      .from("Chapters")
      .where("stories_id", storyId);

    const result: any = await query;
    return result[0].count;
  }
}
