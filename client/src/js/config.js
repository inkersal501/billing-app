import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
 
const apiEndpoint = import.meta.env.VITE_API_BASE_URL;

const storage = JSON.parse(localStorage.getItem("admin"));
 
const defaultState  =  {
    admin: {
        isLoggedin: storage?.isLoggedin || false,
        user: storage?.user || null,
        refreshAdminUsers: false,
        refreshBillingPlans: false, 
        refreshCustomers: false,
        refreshCustomerDetails: false,
    },
    bills: {
        isLoggedin: null,
        user: null,
        refreshUsers: false,
    },
    products: {
        list: []
    }
}

const getPlans = async () => {
    try {
        const result = await axios.get(`${apiEndpoint}/plans`);
        if(result.status === 200){        
            return {status: true, data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
};
 

const isTokenExpired = (token) => {
try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
} catch (error) {
    console.error(error);
    return true; 
}
};

const formatDateTime = (dateTime) => {
    const formattedDateTime =
    `${dateTime.getDate().toString().padStart(2, "0")}-` +
    `${dateTime.toLocaleString("en-IN", { month: "short" })}-` +
    `${dateTime.getFullYear()} ` +
    `${dateTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).toLowerCase()}`;
    return formattedDateTime;
}

const registerBusiness = async (data) => {
    try {
        const result = await axios.post(`${apiEndpoint}/company`, {...data});
        if(result.status === 201){      
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

export { apiEndpoint, defaultState, getPlans, isTokenExpired, formatDateTime, registerBusiness };