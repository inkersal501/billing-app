import { customerModel } from "../../models/index.js";

export const addCustomer = async (data) => await customerModel.create(data).save();
export const getCustomers = async () => await customerModel.find();
export const getCustomersByPhone = async (phone) =>{
    const customers = await customerModel.find({phone: {$regex: phone, $options: 'i'}});
    return customers;
}
export const updateCustomer = async (id, data) => await customerModel.findByIdAndUpdate(id, data, { new: true });
export const deleteCustomer = async (id) => await customerModel.findByIdAndDelete(id);
 