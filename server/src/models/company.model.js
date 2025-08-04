import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    phone: { type: String, trim: true },
    address: { type: String, trim: true },
    gstNumber: {  type: String, trim: true },
    logoUrl: { type: String, trim: true },
    plan: {
        name: { type: String },
        priceMonthly: { type: Number },
        priceYearly: { type: Number },
        limits: {
            billsPerMonth: Number,
            maxUsers: Number
        }
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", },
}, {timestamps: true});

const Company = mongoose.model("Company", companySchema);
export default Company;