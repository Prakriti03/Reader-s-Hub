import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { authentication, authorize } from "../middlewares/auth.middleware";

const route = express();

route.post("/signup", createUser);
route.get("/", authentication, authorize("admin"), getUsers);
route.put("/:id", authentication, updateUser);
route.delete("/:id", authentication, authorize("admin"), deleteUser);

export default route;
