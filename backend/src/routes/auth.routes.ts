import express from "express";
import { login } from "../controller/auth.controller";

const route = express();

route.post("/login", login);

export default route;
