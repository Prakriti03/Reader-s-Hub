import { IReview } from "../interfaces/story.interface";
import { ReviewModel } from "../models/review.model";

export function addReview(userId: string, storyId: string, review: IReview) {
  const data = ReviewModel.addReview(userId, storyId, review);

  return data;
}

export function getReviewsByStory(storyId: string) {
  const data = ReviewModel.getReviewsByStory(storyId);

  return data;
}

export function updateReview(id: string, userId: string, review: IReview) {
  const data = ReviewModel.updateReview(id, userId, review);

  return data;
}

export function deleteReview(id: string, userId: string) {
  const data = ReviewModel.deleteReview(id, userId);

  return data;
}
