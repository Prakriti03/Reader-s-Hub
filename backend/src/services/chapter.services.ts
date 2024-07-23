import { IChapter } from "../interfaces/chapter.interface";
import { ChapterModel } from "../models/chapter.model";

export function createChapter(chapter: IChapter) {
  const data = ChapterModel.create(chapter);

  return data;
}
export function getChapterById(id: string) {
  const data = ChapterModel.getById(id);

  return data;
}
export function updateChapter(id: string, chapterToUpdate: IChapter) {
  const data = ChapterModel.update(id, chapterToUpdate);

  return data;
}
export function deleteChapter(id: string) {
  const data = ChapterModel.delete(id);

  return data;
}
