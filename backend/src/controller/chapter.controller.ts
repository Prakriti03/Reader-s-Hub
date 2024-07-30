import {  Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as ChapterService from "../services/chapter.services";

export async function addChapter(req: Request, res: Response) {
  const { body } = req;
  const { storyId, number } = req.params;   //repeated code

  console.log(`number for addchapter : ${number}`)

  try {
    const data = await ChapterService.addChapter(
      body,
      parseInt(number),
      storyId
    );
    res.json(body);
  } catch (error) {
    res.json(error);
  }
}
export async function getChapterByNumber(req: Request, res: Response) {
  const { storyId, number } = req.params;

  const data = await ChapterService.getChapterByNumber(
    parseInt(number),
    storyId
  );

  res.json(data);
}
export async function updateChapter(req: Request, res: Response) {
  const { body } = req;
  const { storyId, number } = req.params; 

  const data = await ChapterService.updateChapter(body, parseInt(number),storyId );

  res.json();
}
export async function deleteChapter(req: Request, res: Response) {
  const { storyId, number } = req.params;
  console.log(`number for delete : ${number}`)
  const data = await ChapterService.deleteChapter(parseInt(number), storyId);

  res.json(data);
}

export async function countChaptersByStory(req:Request, res:Response) {
  console.log("Inside count chapters controller!")
  const {storyId, number} = req.params;
  const data = await ChapterService.countChaptersByStory(storyId)

  res.json(data)
}
