import {apiEndpoint} from "./config"; 
import axios from "axios"; 

const fetchProducts = async (token) => {

    try {
        const result = await axios.get(`${apiEndpoint}/products`, {
            headers: { Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true, data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
}

const addProduct = async (product, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/products`, {...product}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){        
            return {status: true, data : result.data};
        }
    } catch (error) {
        return {status: false, error};
    }
}
export { fetchProducts, addProduct };