import express from "express";
import authRoutes from "./auth.route.js";
import productRoutes from "./product.route.js";
import billRoutes from "./bill.route.js";
import customerRoutes from "./customer.route.js"; 
import { authMiddleware } from "../../middlewares/index.js";

const router = express.Router();

router.use("/auth", authRoutes); 
router.use(authMiddleware); 
router.use("/products", productRoutes);
router.use("/bills", billRoutes);
router.use("/customers", customerRoutes);

export default router;
