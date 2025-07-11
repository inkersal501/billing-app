import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    billNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: Number,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Bill = mongoose.model("Bill", billSchema);
export default Bill;
