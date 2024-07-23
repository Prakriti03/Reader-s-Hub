import { Request, Response } from "express";
import * as ChapterService from "../services/chapter.services";

export async function createChapter(req: Request, res: Response) {
    const { body } = req;

    try {
      const data =  await ChapterService.createChapter(body);
      res.json(body);
    } catch (error) {
      res.json(error);
    }

}
export async function getChapterById(req: Request, res: Response) {
    const { id } = req.params;

    const data = await ChapterService.getChapterById(id);
  
    res.json(data);
}
export async function updateChapter(req: Request, res: Response) {
    const { id } = req.params;
    const { body } = req;
    const data = await ChapterService.updateChapter(id, body);
  
    res.json(data);
}
export async function deleteChapter(req: Request, res: Response) {
    const { id } = req.params;
    const data = await ChapterService.deleteChapter(id);
  
    res.json(data);
}
