import express from "express";
import { authentication } from "../middlewares/auth.middleware";
import {
  addReview,
  deleteReview,
  updateReview,
} from "../controller/review.controller";
import { getReviewsByStory } from "../controller/review.controller";

const route = express();

route.post("/:storyId", authentication, addReview);
route.get("/:storyId", authentication, getReviewsByStory);
route.put("/:id", authentication, updateReview);
route.delete("/:id", authentication, deleteReview);

export default route;
