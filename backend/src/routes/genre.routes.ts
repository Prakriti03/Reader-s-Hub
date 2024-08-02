import express from "express";
import { authentication } from "../middlewares/auth.middleware";
import { addGenreStoryMap, getGenre } from "../controller/genre.controller";

const route = express();

route.get("/", authentication, getGenre);

route.post("/story",authentication,addGenreStoryMap)

export default route;
