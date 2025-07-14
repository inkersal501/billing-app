import express from "express";
import userRoutes from "./user.route.js";
import productRoutes from "./product.route.js";
import billRoutes from "./bill.route.js";
import customerRoutes from "./customer.route.js";
import adminRoutes from "./admin.route.js";
import { authMiddleware } from "../middlewares/index.js";

const router = express.Router();

router.use("/api/users", userRoutes);
router.use("/api/admin", adminRoutes);

router.use(authMiddleware);
router.use("/api/products", productRoutes);
router.use("/api/bills", billRoutes);
router.use("/api/customers", customerRoutes);

export default router;
