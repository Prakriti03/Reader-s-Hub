import express from "express";
import { authorizeStoryOwner } from "../middlewares/authorize.middleware";
import { authentication, authorize } from "../middlewares/auth.middleware";
import {
  addChapter,
  countChaptersByStory,
  deleteChapter,
  getChapterByNumber,
  updateChapter,
} from "../controller/chapter.controller";
import { upload } from "../middlewares/upload.middleware"; 

const route = express.Router({ mergeParams: true });

route.post("/:number", authentication,authorizeStoryOwner,upload.single('file'), addChapter);
route.get("/:number", authentication, getChapterByNumber);
route.put("/:number", authentication, authorizeStoryOwner, updateChapter);
route.delete("/:number", authentication, authorizeStoryOwner, deleteChapter);
route.get("/", authentication, countChaptersByStory);

export default route;
