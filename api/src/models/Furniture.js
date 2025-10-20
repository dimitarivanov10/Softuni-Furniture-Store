import { Schema, Types, model } from "mongoose";

const furnitureSchema = new Schema({
  make: {
    type: String,
    required: [true, "Make is required!"],
    minLength: [4, "Make should be at least 4 characters long"],
  },
  model: {
    type: String,
    required: [true, "Model is required!"],
    minLength: [4, "Model should be at least 4 characters long"],
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1950, "Year should be at least 1950"],
    max: [2050, "Year should be below 2050"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Description should be at least 10 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price should be positive number"],
  },
  img: {
    type: String,
    required: [true, "ImageUrl is required"],
  },
  material: {
    type: String,
    required: false,
  },
  _ownerId: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;
