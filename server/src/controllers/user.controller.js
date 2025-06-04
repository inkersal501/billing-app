import { userService } from "../services/index.js";

const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await userService.loginUser(req.body);
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export default { register, login };
