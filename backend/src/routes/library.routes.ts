import express from "express";
import { authentication } from "../middlewares/auth.middleware";
import { addToLibrary, deleteFromLibrary, getLibrary } from "../controller/library.controller";


const route = express();

route.post('/',authentication,addToLibrary);
route.get('/',authentication,getLibrary);
route.delete('/:storyId',authentication,deleteFromLibrary)
// route.put();         //later while showing how much portion is read

export default route;
