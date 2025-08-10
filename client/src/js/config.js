const apiEndpoint = import.meta.env.VITE_API_BASE_URL;
const storage = JSON.parse(localStorage.getItem("admin"));

const defaultState  =  {
    admin: {
        isLoggedin: storage.isLoggedin || null,
        user: storage.user || null,
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
export { apiEndpoint, defaultState };