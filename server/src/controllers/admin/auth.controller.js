import { adminServices } from "../../services/index.js";
const { authService } = adminServices;

export const register = async (req, res) => {
  try {
    await authService.register(req.body);
    res.status(201).json({ message: "Admin User registered." });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export const getDashboardData = async (req, res) => {
  try {
    const data = await authService.getDashboardData();
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
