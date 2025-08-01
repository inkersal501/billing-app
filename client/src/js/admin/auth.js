import {apiEndpoint} from "../config"; 
import axios from "axios";
import { toast } from "react-toastify";

const handleLogin = async (email, password) => {

    try {
        const result = await axios.post(`${apiEndpoint}/admin/auth/login`, {email, password});
        if(result.status === 200){
            toast.success("Loggedin Successully.");        
            return result.data;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
 
} 

const fetchAdminUsers = async (token)=> {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/auth/users`, {
            headers: {Authorization: `Bearer ${token}`}
        }); 
        return result.data; 
    } catch (error) { 
        return error;
    }
};

const createAdminUser = async (data, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/admin/auth/user`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){
            toast.success("Admin Created Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};
const updateAdminUser = async (data, token) => {
    try {
        const result = await axios.patch(`${apiEndpoint}/admin/auth/user`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){
            toast.success("Admin details Updated Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};


export { handleLogin, fetchAdminUsers, createAdminUser, updateAdminUser };