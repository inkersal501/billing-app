import express from "express";
import adminRoutes from "./admin/index.js"; 
import userRoutes from "./user/index.js";

const router = express.Router();

router.use("/admin", adminRoutes);
router.use("/users", userRoutes);
 

export default router;
