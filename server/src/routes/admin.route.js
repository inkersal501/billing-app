import express from "express";
import { adminController } from "../controllers/index.js";
import { authMiddleware } from "../middlewares/index.js";
const router = express.Router();

router.post("/register", adminController.register);
router.post("/login", adminController.login);

router.use(authMiddleware);

router.get("/company", adminController.getCompany);
router.post("/company", adminController.createCompany);

export default router;
