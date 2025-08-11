import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import { userModel } from "../../models/index.js";

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await userModel.findById(decoded.id).lean();
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token "+err.message });
  }
};
export default { auth };
