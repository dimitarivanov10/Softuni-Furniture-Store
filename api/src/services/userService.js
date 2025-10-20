import User from "../models/User.js";
import bcrypt from "bcrypt";

export default {
  register(email, password) {
    return User.create({ email, password });
  },
  async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Username or password are wrong!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Username or password are wrong!");
    }

    return user;
  },
};
