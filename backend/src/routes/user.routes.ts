import express from "express";
import {
  createUser,
  deleteUser,
  getLoggedInUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { authentication, authorize } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";

const route = express();

route.post("/signup", upload.single("profilePicture"), createUser);
route.get("/user", authentication, getLoggedInUser);
route.get("/", authentication, authorize("admin"), getUsers);
route.get("/:id", authentication, getUserById);
route.put("/",authentication,  upload.single("profilePicture"),updateUser);
route.delete("/", authentication, deleteUser);

export default route;
