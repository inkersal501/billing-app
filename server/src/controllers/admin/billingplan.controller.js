import { adminServices } from "../../services/index.js";
const { billingPlanService } = adminServices;

export const createPlan = async (req, res) => {
  try {
    const plan = await billingPlanService.createPlan(req.body);
    res.status(201).json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getPlans = async (req, res) => {
  try {
    const plans = await billingPlanService.getPlans();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getActivePlans = async(req, res) => {
  try {
    const plans = await billingPlanService.getPlans(true);
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlanById = async (req, res) => {
  try {
    const plan = await billingPlanService.getPlanById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const plan = await billingPlanService.updatePlan(req.params.id, req.body);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    await billingPlanService.updateStatus(req.params.id, req.body.status);     
    res.status(200).json({message: "Plan Status Updated."});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePlan = async (req, res) => {
  try {
    const result = await billingPlanService.deletePlan(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
