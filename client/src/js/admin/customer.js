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
const fetchCustomerDetails = async (id, token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/company/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            return result.data;    
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

const updateCustomer = async (data, token) => {
    try {
        const result = await axios.patch(`${apiEndpoint}/admin/company`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            toast.success("Customer details Updated Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

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

const fetchCompanyUsers = async (company, token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/company/users/${company}`, {
            headers: {Authorization: `Bearer ${token}`}
        }); 
        return result.data; 
    } catch (error) { 
        return error;
    }
};

const createCompanyUser = async (data, company, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/admin/company/users/${company}`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){
            toast.success("User Created Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
}

const updateCompanyUser = async (data, company, token) => {
    try {
        const result = await axios.patch(`${apiEndpoint}/admin/company/users/${company}`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            toast.success("User details Updated Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

export {createCustomer, fetchCustomerDetails, updateCustomer, fetchCustomers, fetchCompanyUsers, createCompanyUser, updateCompanyUser};