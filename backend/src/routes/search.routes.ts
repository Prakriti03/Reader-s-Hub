import express from "express";
import { authentication } from "../middlewares/auth.middleware";
import { getStoriesFromSearch } from "../controller/search.controller";

const route = express();


route.get('',authentication,getStoriesFromSearch);


export default route;