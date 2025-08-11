import axios from "axios";

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
    auth: {
        isLoggedin: null,
        user: null
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
 
export { apiEndpoint, defaultState, getPlans };