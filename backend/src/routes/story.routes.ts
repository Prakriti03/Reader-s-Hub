import express from "express";
import chapterRoute from "./chapter.routes";
import { createStory, deleteStory, getStoryById, updateStory } from "../controller/story.controller";

import { authentication, authorize } from "../middlewares/auth.middleware";
import { updateChapter } from "../services/chapter.services";

const route = express();

route.post("/",createStory );
route.get("/:id",getStoryById)
route.put("/:id",updateStory);
route.delete("/:id",deleteStory)


route.use("/chapter", chapterRoute);

export default route;
