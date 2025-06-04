import { customerModel } from "../models/index.js";

const addCustomer = async (data) => await new customerModel(data).save();
const getCustomers = async () => await customerModel.find();
const updateCustomer = async (id, data) => await customerModel.findByIdAndUpdate(id, data, { new: true });
const deleteCustomer = async (id) => await customerModel.findByIdAndDelete(id);

export default { addCustomer, getCustomers, updateCustomer, deleteCustomer };
