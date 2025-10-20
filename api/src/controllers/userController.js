import { Router } from "express";

const userController = Router();

userController.post("/register", (req, res) => {
  res.end();
});

export default userController;
