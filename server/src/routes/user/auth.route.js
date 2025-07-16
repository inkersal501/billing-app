import express from "express";
import { userControllers } from "../../controllers/index.js";
const { register, login} = userControllers.authController;
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
