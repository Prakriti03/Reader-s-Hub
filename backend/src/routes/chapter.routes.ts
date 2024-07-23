import express from "express";

import { authentication, authorize } from "../middlewares/auth.middleware";
import {
  createChapter,
  deleteChapter,
  getChapterById,
  updateChapter,
} from "../controller/chapter.controller";

const route = express();

route.post("/", authentication, createChapter);
route.get("/:id",authentication, getChapterById);
route.put("/:id",authentication, updateChapter);
route.delete("/:id",authentication, deleteChapter);

export default route;
