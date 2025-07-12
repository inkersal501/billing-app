import {apiEndpoint} from "./config"; 
import axios from "axios"; 

const addBill = async (billdata, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/bills`, billdata, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){ 
            return {status: true, data : result.data};
        }
    } catch (error) {
        return {status: false, error};
    }
}
const fetchBills = async (url, token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/bills${url}`, {
            headers: { Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true, data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
}
export { addBill, fetchBills };