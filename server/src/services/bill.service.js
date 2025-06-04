import { billModel, productModel } from "../models/index.js";

const createBill = async (data) => {
  let total = 0;
  for (const item of data.products) {
    const product = await productModel.findById(item.product);
    if (!product || product.stock < item.quantity) {
      throw new Error(
        `Insufficient stock for ${product?.name || "Unknown Product"}`
      );
    }
    product.stock -= item.quantity;
    await product.save();
    total += item.quantity * product.price;
    item.price = product.price;
  }

  const bill = new billModel({
    customer: data.customer,
    products: data.products,
    totalAmount: total,
  });

  return await bill.save();
};

const getBills = async () =>
  await billModel.find().populate("customer").populate("products.product");

export default { createBill, getBills };
