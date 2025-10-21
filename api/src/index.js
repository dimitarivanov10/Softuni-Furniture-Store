import express from "express";
import cors from "cors";
import routes from "./routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

try {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "furniture-project",
  });
  console.log("Successful connection to DB!");
} catch (error) {
  console.error("Cannot connect to DB!");
  console.error(error.message);
}

app.use(cors());
app.use(express.json());
app.use(authMiddleware)
app.use(routes);
app.use(errorHandler);

app.get("/", (req, res) => {
  console.log("Working fine asl");
  res.send("Working fine ash");
});

app.listen(3030, () =>
  console.log("Server is listenin on http://localhost:3030...")
);
