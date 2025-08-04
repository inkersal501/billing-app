import { billingPlanModel } from "../../models/index.js";

export const createPlan = async (data) => {
  const plan = billingPlanModel.create(data);
  return plan;
};

export const getPlans = async (active = false) => {
  if(active)
    return await billingPlanModel.find({isActive: true});
  return await billingPlanModel.find();
};

export const getPlanById = async (id) => {
  return await billingPlanModel.findById(id);
};

export const updatePlan = async (id, data) => {
  return await billingPlanModel.findByIdAndUpdate(id, data, { new: true });
};

export const updateStatus = async (id, status) => { 
  const plan =  await billingPlanModel.findById(id);
  plan.isActive = status;
  await plan.save();
  return plan;
};

export const deletePlan = async (id) => {
  return await billingPlanModel.findByIdAndDelete(id);
};
 
