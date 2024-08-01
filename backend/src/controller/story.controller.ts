import {  Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as StoryService from "../services/story.services";
import { cloudinary } from "../config/cloudinary.config";

export async function createStory(req: Request, res: Response) {
    const { body } = req;
    const userId= req.user?.id;
    const coverImage = req.file;
    try {
      
      const result = await cloudinary.uploader.upload(coverImage!.path, {
        folder: 'story-coverImages',
      });
      const storyData = {
        ...body,
        coverImageUrl : result.secure_url,
      }
      const data =  await StoryService.createStory(storyData,userId as string);
      res.json(data);
    } catch (error) {
      res.json(error);
    }

}
export async function getStories(req:Request,res:Response) {
  const data = await StoryService.getStories();
  res.json(data);
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
