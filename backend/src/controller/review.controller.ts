import * as ReviewService from "../services/review.services";
import { Request } from "../interfaces/auth.interface";
import { Response } from "express";

export async function addReview(req: Request, res: Response) {
  const userId = req.user?.id;
  const { storyId } = req.params;
  const { body } = req;

  const data = await ReviewService.addReview(userId!, storyId, body);

  res.json(data);
}

export async function getReviewsByStory(req: Request, res: Response) {
  const { storyId } = req.params;

  const data = await ReviewService.getReviewsByStory(storyId);

  res.json(data);
}

export async function updateReview(req: Request, res: Response) {
  const { id } = req.params;
  const userId = req.user?.id;

  const { body } = req;

  const data = await ReviewService.updateReview(id, userId!, body);

  res.json(data);
}

export async function deleteReview(req: Request, res: Response) {
  const { id } = req.params;
  const userId = req.user?.id;

  const data = await ReviewService.deleteReview(id, userId!);
}
