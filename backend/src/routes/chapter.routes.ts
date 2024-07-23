import express from "express";

import { authentication, authorize } from "../middlewares/auth.middleware";
import {
  createChapter,
  deleteChapter,
  getChapterById,
  updateChapter,
} from "../controller/chapter.controller";

const route = express();

route.post("/", createChapter);
route.get("/:id", getChapterById);
route.put("/:id", updateChapter);
route.delete("/:id", deleteChapter);

export default route;
