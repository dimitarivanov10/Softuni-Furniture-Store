import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
});

const User = model("User", userSchema);

export default User;
