import {  Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as StoryService from "../services/story.services";

export async function createStory(req: Request, res: Response) {
    const { body } = req;
    const userId= req.user?.id;
    try {
      const data =  await StoryService.createStory(body,userId as string);
      res.json(body);
    } catch (error) {
      res.json(error);
    }

}
export async function getStoryById(req: Request, res: Response) {
    const { id } = req.params;

    const data = await StoryService.getStoryById(id);
  
    res.json(data);
}
export async function updateStory(req: Request, res: Response) {
    const userId= req.user?.id;
    const { id } = req.params;
    const { body } = req;
    const data = await StoryService.updateStory(id, body, userId as string);
  
    res.json(data);
}
export async function deleteStory(req: Request, res: Response) {
    const userId= req.user?.id;
    const { id } = req.params;
    const data = await StoryService.deleteStory(id, userId as string);
  
    res.json(data);
}