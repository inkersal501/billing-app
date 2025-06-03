import { userModel } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const registerUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  const user = await userModel.create({ ...data, password: hashed });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: "1d",
  });
  return { token, user };
};

export default { registerUser, loginUser };
