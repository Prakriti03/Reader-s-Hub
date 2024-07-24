import express from "express";
import authRoute from "./auth.routes";
import userRoute from "./user.routes";
import storyRoute from "./story.routes";

const route = express();

route.use("/auth", authRoute);
route.use("/users", userRoute);
route.use("/stories", storyRoute);

export default route;
