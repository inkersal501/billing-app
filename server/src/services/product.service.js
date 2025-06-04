import { productModel } from "../models/index.js";

const addProduct = async (data) => await new productModel(data).save();
const getProducts = async () => await productModel.find();
const updateProduct = async (id, data) => await productModel.findByIdAndUpdate(id, data, { new: true });
const deleteProduct = async (id) => await productModel.findByIdAndDelete(id);

export default { addProduct, getProducts, updateProduct, deleteProduct };
