import { toast } from "react-toastify";
import {apiEndpoint} from "../config"; 
import axios from "axios"; 
 
const createCustomer = async (data, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/admin/customer`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            toast.success("Created Customer Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
}

export {createCustomer};