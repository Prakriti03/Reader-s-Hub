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
import { upload } from "../middlewares/upload.middleware";

const route = express();

route.post("/", authentication,upload.single("coverImage"), createStory);
route.get("/:id", authentication, getStoryById);
route.get("/",authentication, getStories);
route.put("/:id", authentication, updateStory);
route.delete("/:id", authentication, deleteStory);

route.use("/:storyId/chapter", authentication, chapterRouter);

export default route;
