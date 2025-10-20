import { Router } from "express";

const furnitureController = Router();

furnitureController.get("/", (req, res)=>{
    res.json([]);
})

export default furnitureController;