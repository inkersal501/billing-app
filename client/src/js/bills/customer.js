import {apiEndpoint} from "../config"; 
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
const searchCustomersbyPhone = async (phone, token) => {

    try {
        const result = await axios.get(`${apiEndpoint}/customers/search/phone/${phone}`, {
            headers: { Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true, data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
}

export { fetchCustomers, searchCustomersbyPhone };