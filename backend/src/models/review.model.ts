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
    const avgRatingQuery = this.queryBuilder()
      .select(this.queryBuilder().raw("COALESCE(AVG(rating), 0) AS avgRating"))
      .table("Reviews")
      .where("stories_id", storyId);

    const commentsQuery = this.queryBuilder()
      .select("Reviews.comment", "Reviews.user_id", "Users.profilePictureUrl")
      .table("Reviews")
      .join("Users", "Reviews.user_id", "Users.id")
      .where("Reviews.stories_id", storyId);

    const [avgRatingResult, commentsResult] = await Promise.all([
      avgRatingQuery,
      commentsQuery,
    ]);

    console.log(avgRatingResult[0]);

    const avgRating = avgRatingResult[0].avgrating;

    console.log(`average rating : ${avgRating}`);

    // Extract comments
    const comments = commentsResult.map((row) => ({
      comment: row.comment,
      userProfilePicture: row.profilePictureUrl,
    }));

    return {
      avgRating,
      comments,
    };
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
    const query = this.queryBuilder().del().table("Reviews").where({
      id: id,
      user_id: userId,
    });

    const data = await query;

    return data;
  }
}
