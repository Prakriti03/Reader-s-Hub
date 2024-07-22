import express from "express";
import { createUser } from "../controller/user.controller";

const route = express();

route.post("/signup",createUser);
route.get("/",);
route.put("/:id",);
route.delete("/:id",);

export default route;