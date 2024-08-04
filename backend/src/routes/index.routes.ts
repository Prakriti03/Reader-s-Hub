import express from "express";
import authRoute from "./auth.routes";
import userRoute from "./user.routes";
import storyRoute from "./story.routes";
import libraryRoute from "./library.routes";
import genreRoute from "./genre.routes";
import reviewRoute from "./review.routes";
import searchRoute from "./search.routes";

const route = express();

route.use("/auth", authRoute);
route.use("/users", userRoute);
route.use("/stories", storyRoute);
route.use("/library", libraryRoute);
route.use("/genre", genreRoute);
route.use("/review", reviewRoute);
route.use("/search", searchRoute);

export default route;
