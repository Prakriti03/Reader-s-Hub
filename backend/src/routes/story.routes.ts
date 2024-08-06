import express from "express";
import chapterRouter from "./chapter.routes";
import {
  createStory,
  deleteStory,
  getStories,
  getStoriesByUserId,
  getStoryById,
  getTotalStoriesCount,
  updateStory,
} from "../controller/story.controller";

import { authentication, authorize } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";
import { getTotalStoriesCountByGenre } from "../controller/story.controller";

const route = express();

route.post("/", authentication,upload.single("coverImage"), createStory);
route.get("/count", authentication, getTotalStoriesCount);
route.get("/genre-count",authentication, getTotalStoriesCountByGenre);
route.get("/author",authentication,getStoriesByUserId);
route.get("/:id", authentication, getStoryById);
route.get("/",authentication, getStories);
route.put("/:id", authentication,upload.single("coverImage"), updateStory);
route.delete("/:id", authentication, deleteStory);

route.use("/:storyId/chapter", authentication, chapterRouter);

export default route;
