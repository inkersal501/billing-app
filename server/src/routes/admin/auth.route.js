import express from "express";
import { adminControllers } from "../../controllers/index.js";
const { register, login} = adminControllers.authController;
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
