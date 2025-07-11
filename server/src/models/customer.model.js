import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    company: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    name: String,
    phone: String,
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
