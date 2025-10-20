import Furniture from "../models/Furniture.js";

export default {
  create(furnitureData) {
    return Furniture.create(furnitureData);
  },
};
