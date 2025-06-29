import { productModel } from "../models/index.js";

const addProduct = async (data) => {
  const result = await productModel.create(data);
  return result;
};
const getProducts = async () => await productModel.find().sort({ name:1 });
const updateProduct = async (id, data) => await productModel.findByIdAndUpdate(id, data, { new: true });
const updateProductStatus = async (id, data) => await productModel.findByIdAndUpdate(id, {status: data.status}, { new: true });
const deleteProduct = async (id) => await productModel.findByIdAndDelete(id);

export default { addProduct, getProducts, updateProduct, updateProductStatus, deleteProduct };
