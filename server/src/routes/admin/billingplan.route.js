import express from "express";
import {adminControllers} from "../../controllers/index.js";
const { createPlan, getPlans, getPlanById, updatePlan, deletePlan} = adminControllers.billingPlanController;
const router = express.Router();

router.post("/", createPlan);
router.get("/", getPlans);
router.get("/:id", getPlanById);
router.put("/:id", updatePlan);
router.delete("/:id", deletePlan);

export default router;
