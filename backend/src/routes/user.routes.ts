import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { authentication } from "../middlewares/auth.middleware";

const route = express();

route.post("/signup", createUser);
route.get("/", authentication, getUsers);
route.put("/:id", authentication, updateUser);
route.delete("/:id", authentication, deleteUser);

export default route;
