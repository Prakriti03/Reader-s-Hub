import express, { Router } from "express";
import route from "./routes/index.routes";
import config from "./config/config";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(route);

app.get("/", (req, res) => {
  res.send("Hello to Reader's Hub");
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server started listening on port :${config.port}`);
});
