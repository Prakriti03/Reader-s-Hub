import express from "express";
import authRoute from "./auth.routes"
import userRoute from "./user.routes"

const route = express();

route.use('/auth',authRoute);
route.use('/users',userRoute);

export default route;
