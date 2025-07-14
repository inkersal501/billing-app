const apiEndpoint = import.meta.env.VITE_API_BASE_URL;
const defaultState  =  {
    admin: {
        isLoggedin: null,
        user: null,
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