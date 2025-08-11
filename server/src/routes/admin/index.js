import express from "express"; 
import authRoutes from "./auth.route.js";
import companyRoutes from "./company.route.js";
import billingPlanRoutes from "./billingplan.route.js";
import { adminAuthMiddleware } from "../../middlewares/index.js";

const router = express.Router();
 
router.use("/auth", authRoutes);

router.use(adminAuthMiddleware);

router.use("/company", companyRoutes);
router.use("/plans", billingPlanRoutes); 

export default router;
