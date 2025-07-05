import { customerModel } from "../models/index.js";

const addCustomer = async (data) => await customerModel.create(data).save();
const getCustomers = async () => await customerModel.find();
const getCustomersByPhone = async (phone) =>{
    const customers = await customerModel.find({phone: {$regex: phone, $options: 'i'}});
    return customers;
}
const updateCustomer = async (id, data) => await customerModel.findByIdAndUpdate(id, data, { new: true });
const deleteCustomer = async (id) => await customerModel.findByIdAndDelete(id);

export default { addCustomer, getCustomers, getCustomersByPhone, updateCustomer, deleteCustomer };
