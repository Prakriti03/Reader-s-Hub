import { IReview } from "../interfaces/story.interface";
import { BaseModel } from "./base.model";

export class ReviewModel extends BaseModel {
  static async addReview(userId: string, storyId: string, review: IReview) {
    const reviewToAdd = {
      user_id: userId,
      rating: review.rating,
      comment: review.comment,
      stories_id: storyId,
    };

    const query = this.queryBuilder()
      .insert(reviewToAdd)
      .table("Reviews")
      .returning("*");

    const data = await query;

    return data;
  }

  static async getReviewsByStory(storyId: string) {
    console.log(`story id is : ${storyId}`);
    const query = this.queryBuilder()
      .select("*")
      .table("Reviews")
      .where("stories_id", storyId);

    const data = await query;

    return data;
  }

  static async updateReview(id: string, userId: string, review: IReview) {
    const updatedReview = {
      rating: review.rating,
      comment: review.comment,
    };

    const query = this.queryBuilder()
      .update(updatedReview)
      .table("Reviews")
      .where({
        id: id,
        user_id: userId,
      });

    const data = await query;

    return data;
  }

  static async deleteReview(id: string, userId: string) {
    const query = this.queryBuilder()
      .del()
      .table("Reviews")
      .where({
        id: id,
        user_id: userId,
      })
      .returning("*");

    const data = await query;

    return data;
  }
}
