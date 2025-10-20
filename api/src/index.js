import express from "express";
import cors from "cors";
import routes from "./routes.js";

const app = express();

app.use(cors());
app.use(routes);
app.get("/", (req, res) => {
  console.log("Working fine asl");
  res.send("Working fine ash");
});

app.listen(3030, () =>
  console.log("Server is listenin on http://localhost:3030...")
);
