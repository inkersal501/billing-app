import { productModel } from "../../models/index.js";

export const addProduct = async (company, data) => {
  const result = await productModel.create({...data, company});
  return result;
};
export const getProducts = async () => await productModel.find().sort({ name:1 });
export const updateProduct = async (id, data) => await productModel.findByIdAndUpdate(id, data, { new: true });
export const updateProductStatus = async (id, data) => await productModel.findByIdAndUpdate(id, {status: data.status}, { new: true });
export const deleteProduct = async (id) => await productModel.findByIdAndDelete(id);
 