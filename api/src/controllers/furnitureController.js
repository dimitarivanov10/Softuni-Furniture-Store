import querystring from "querystring";
import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {
  const query = req.query.where?.replaceAll('"', "");
  let filter = {};
  if (query) {
    filter = querystring.parse(query);
  }

  const furnitures = await furnitureService.getAll(filter);

  res.json(furnitures || []);
});

furnitureController.get("/:furnitureId", async (req, res) => {
  const furnitureId = req.params.furnitureId;

  const furniture = await furnitureService.getOne(furnitureId);
  res.json(furniture);
});

furnitureController.post("/", async (req, res) => {
  const furnitureData = req.body;
  const ownerId = req.user.id;

  try {
    const furniture = await furnitureService.create(furnitureData, ownerId);
    res.status(201).json(furniture);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
});

furnitureController.put("/:furnitureId", async (req, res) => {
  const furnitureId = req.params.furnitureId;
  const furnitureData = req.body;

  try {
    const furniture = await furnitureService.update(furnitureId, furnitureData);
    res.json(furniture);
  } catch (error) {
    //err handling
  }
});

furnitureController.delete("/:furnitureId", async (req, res) => {
  const furnitureId = req.params.furnitureId;
  const userId = req.user.id;

  try {
    const furniture = await furnitureService.delete(furnitureId, userId);
    res.json(furniture);
  } catch (error) {
    //err handling
  }
});

export default furnitureController;
