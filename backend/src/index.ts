import express, { Router } from "express";
import route from "./routes/index.routes";
import config from "./config/config";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.use(express.json());
app.use(route);

app.get("/", (req, res) => {
  res.send("Hello to Reader's Hub");
});

app.listen(config.port, () => {
  console.log(`Server started listening on port :${config.port}`);
});
