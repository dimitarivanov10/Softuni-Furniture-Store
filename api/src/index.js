import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Working fine asl");
  res.send("Working fine ash");
});

app.listen(3030, () =>
  console.log("Server is listenin on http://localhost:3030...")
);
