import {apiEndpoint} from "./config"; 
import axios from "axios"; 

const fetchCustomers = async (token) => {

    try {
        const result = await axios.get(`${apiEndpoint}/customers`, {
            headers: { Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true, data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
}
export { fetchCustomers };