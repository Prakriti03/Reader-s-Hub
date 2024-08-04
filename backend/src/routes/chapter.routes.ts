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

route.post("/:number", authorizeStoryOwner,upload.single('file'), addChapter);
route.get("/:number",  getChapterByNumber);
route.put("/:number",  authorizeStoryOwner, updateChapter);
route.delete("/:number",  authorizeStoryOwner, deleteChapter);
route.get("/",  countChaptersByStory);

export default route;
