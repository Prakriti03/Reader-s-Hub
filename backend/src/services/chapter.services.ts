import { IChapter } from "../interfaces/chapter.interface";
import { ChapterModel } from "../models/chapter.model";

export function addChapter(chapter: IChapter, storyId: string) {
  ("Inside addChapter service!!!");
  const data = ChapterModel.create(chapter, storyId);

  return data;
}
export function getChapterByNumber(number: number, story_id: string) {
  const data = ChapterModel.getByNumber(number, story_id);

  return data;
}
export function updateChapter(
  chapterToUpdate: IChapter,
  number: number,
  story_id: string
) {
  const data = ChapterModel.update(chapterToUpdate, number, story_id);

  return data;
}

export function deleteChapter(number: number, storyId: string) {
  const data = ChapterModel.delete(number, storyId);

  return data;
}

export function countChaptersByStory(storyId: string) {
  const data = ChapterModel.countChaptersByStory(storyId);
  return data;
}
