import { billingPlanModel } from "../../models/index.js";

export const createPlan = async (data) => {
  const plan = billingPlanModel.create(data);
  return await plan.save();
};

export const getPlans = async () => {
  return await billingPlanModel.find();
};

export const getPlanById = async (id) => {
  return await billingPlanModel.findById(id);
};

export const updatePlan = async (id, data) => {
  return await billingPlanModel.findByIdAndUpdate(id, data, { new: true });
};

export const deletePlan = async (id) => {
  return await billingPlanModel.findByIdAndDelete(id);
};
 
