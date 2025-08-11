import express from "express";
import { billsControllers } from "../../controllers/index.js";
const { register, login} = billsControllers.authController;
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
