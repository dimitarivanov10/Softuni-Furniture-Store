import { Router } from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.register(email, password);
    res.status(201).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
});

export default userController;
