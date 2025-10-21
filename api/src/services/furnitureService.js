import Furniture from "../models/Furniture.js";

export default {
  getAll() {
    return Furniture.find().select({
      description: true,
      price: true,
      img: true,
    });
  },
  getOne(furnitureId) {
    return Furniture.findById(furnitureId);
  },
  create(furnitureData, ownerId) {
    return Furniture.create({
      ...furnitureData,
      _ownerId: ownerId,
    });
  },
};
