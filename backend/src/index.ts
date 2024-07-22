import express, { Router } from "express";
import route from "./routes/index.routes";
import config from "./config";

const app = express();

app.use(express.json());
app.use(route);

app.get("/", (req, res) => {
  res.send("Hello to Reader's Hub");
});

app.listen(config.port, () => {
  console.log(`Server started listening on port :${config.port}`);
});
