const apiEndpoint = import.meta.env.VITE_API_BASE_URL;
const defaultState  =  {
    auth: {
        isLoggedin: null,
        user: null
    },
    products: {
        list: []
    }
}
export { apiEndpoint, defaultState };