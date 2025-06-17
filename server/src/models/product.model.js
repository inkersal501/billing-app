import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    unit: String,
    measure: String,
    status: {type: String, default: "Available"}, 
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
