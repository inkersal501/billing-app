const apiEndpoint = import.meta.env.VITE_API_BASE_URL;
const defaultState  =  {
    admin: {
        isLoggedin: null,
        user: null,
        refreshAdminUsers: true,
        refreshBillingPlans: true, 
        refreshCustomers: true,
        refreshCustomerDetails: true,
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