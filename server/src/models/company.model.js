import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    email: { type: String, trim: true},
    phone: { type: String, trim: true},
    address: { type: String, trim: true },
    gstNumber: {  type: String, trim: true },
    logoUrl: { type: String, trim: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
}, {timestamps: true});

const Company = mongoose.model("Company", companySchema);
export default Company;