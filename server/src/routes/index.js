import express from "express";
import adminRoutes from "./admin/index.js"; 
import userRoutes from "./user/index.js";
import { getActivePlans } from "../controllers/admin/billingplan.controller.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/users", userRoutes);
router.get("/plans", getActivePlans)

export default router;
