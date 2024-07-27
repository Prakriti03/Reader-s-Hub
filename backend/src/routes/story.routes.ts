import express from "express";
import chapterRouter from "./chapter.routes";
import {
  createStory,
  deleteStory,
  getStories,
  getStoryById,
  updateStory,
} from "../controller/story.controller";

import { authentication, authorize } from "../middlewares/auth.middleware";

const route = express();

route.post("/", authentication, createStory);
route.get("/:id", authentication, getStoryById);
route.get("/", getStories);
route.put("/:id", authentication, updateStory);
route.delete("/:id", authentication, deleteStory);

route.use("/:storyId/chapter", authentication, chapterRouter);

export default route;
