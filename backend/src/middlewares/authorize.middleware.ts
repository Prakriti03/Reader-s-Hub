import {  Response, NextFunction } from "express";
import { Request } from "../interfaces/auth.interface";
import * as StoryService from "../services/story.services";

export const authorizeStoryOwner = async (req: Request, res: Response, next: NextFunction) => {
  const { storyId } = req.params;
  const userId = req.user?.id;

  try {
    const story = await StoryService.getStoryById(storyId);
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }
    if (story.user_id !== userId) {
      return res.status(403).json( "You are not authorized to modify this story" );
    }
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};
