import express from "express";
import { authorizeStoryOwner } from "../middlewares/authorize.middleware";
import { authentication, authorize } from "../middlewares/auth.middleware";
import {
  addChapter,
  deleteChapter,
  getChapterByNumber,
  updateChapter,
} from "../controller/chapter.controller";

const route = express.Router({ mergeParams: true });

route.post("/:number", authentication, authorizeStoryOwner, addChapter);
route.get("/:number", authentication, getChapterByNumber);
route.put("/:number",authentication, authorizeStoryOwner, updateChapter);
route.delete("/:number", authentication, authorizeStoryOwner, deleteChapter);

export default route;
