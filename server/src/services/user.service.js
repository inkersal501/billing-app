import { loginModel, userModel } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

const registerUser = async (data) => {
  const checkUser = await userModel.findOne({ email: data.email });
  if (checkUser)
    throw new Error("Email already exists");

  const hashed = await bcrypt.hash(data.password, 10);
  const user = await userModel.create({ ...data, password: hashed });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({ email });
  if (!user)
    throw new Error("User doesn't exist");

  if (!(await bcrypt.compare(password, user.password)))
    throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: config.jwtExpire,
  });
  const {name, phone, role} = user;
  await loginModel.create({email, token});
  
  return { name, email, phone, role, token };
};

export default { registerUser, loginUser };
