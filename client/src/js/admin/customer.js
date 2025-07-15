import { toast } from "react-toastify";
import {apiEndpoint} from "../config"; 
import axios from "axios"; 
 
const createCustomer = async (data, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/admin/company`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){
            toast.success("Customer Created Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
}
const fetchCustomers = async (token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/company`, {
            headers: {Authorization: `Bearer ${token}`}
        }); 
        return result.data.company; 
    } catch (error) { 
        return error;
    }
};

export {createCustomer, fetchCustomers};