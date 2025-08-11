import express from "express";
import adminRoutes from "./admin/index.js"; 
import billsRoutes from "./bills/index.js";
import { getActivePlans } from "../controllers/admin/billingplan.controller.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/bills", billsRoutes);
router.get("/plans", getActivePlans)

export default router;
