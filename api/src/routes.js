import { Router } from "express";
import furnitureController from "./controllers/furnitureController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use("/data/catalog", furnitureController);
routes.use("/user", userController);

export default routes;
