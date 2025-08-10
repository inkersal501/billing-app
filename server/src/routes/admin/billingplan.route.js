import express from "express";
import {adminControllers} from "../../controllers/index.js";
const { createPlan, getPlans, getActivePlans, getPlanById, updatePlan, updateStatus, deletePlan} = adminControllers.billingPlanController;
const router = express.Router();

router.post("/", createPlan);
router.get("/", getPlans);
router.get("/active", getActivePlans);
router.get("/:id", getPlanById);
router.put("/:id", updatePlan);
router.patch("/status/:id", updateStatus);
router.delete("/:id", deletePlan);

export default router;
