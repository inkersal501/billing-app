import { adminService } from "../services/index.js";

const register = async (req, res) => { 
    try {
        await adminService.register(req.body);
        res.status(201).json({message: "Admin registered."});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
const login = async (req, res) => {
  try {
    const data = await adminService.login(req.body);
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
export default {register, login};