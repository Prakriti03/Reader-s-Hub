import express from "express";
import chapterRoute from "./chapter.routes";
import { createStory, deleteStory, getStoryById, updateStory } from "../controller/story.controller";

import { authentication, authorize } from "../middlewares/auth.middleware";
import { updateChapter } from "../services/chapter.services";

const route = express();

route.post("/",authentication,createStory );
route.get("/:id",authentication,getStoryById)
route.put("/:id",authentication,updateStory);
route.delete("/:id",authentication,deleteStory)


route.use("/chapter", chapterRoute);

export default route;
