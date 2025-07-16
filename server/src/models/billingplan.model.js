import mongoose from "mongoose";

const billingPlanSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  priceMonthly: { type: Number, required: true },
  priceYearly: { type: Number, required: true },
  features: [String],
  limits: {
    billsPerMonth: Number,
    maxUsers: Number,
    customers: String,
  },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const BillingPlan =  mongoose.model("BillingPlan", billingPlanSchema);
export default BillingPlan ;