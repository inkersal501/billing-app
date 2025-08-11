import {apiEndpoint} from "../config"; 
import axios from "axios"; 

const fetchProducts = async (token) => {

    try {
        const result = await axios.get(`${apiEndpoint}/bills/products`, {
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
        const result = await axios.post(`${apiEndpoint}/bills/products`, {...product}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){        
            return {status: true, data : result.data};
        }
    } catch (error) {
        return {status: false, error};
    }
}
const updateProduct = async (product, data, token) => {
    try {
        const result = await axios.put(`${apiEndpoint}/bills/products/${product}`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true};
        }
    } catch (error) {
        return {status: false, error};
    }
};

const updateStatus = async (product, status, token) => {
    try {
        const result = await axios.patch(`${apiEndpoint}/bills/products/status/${product}`, {status}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){        
            return {status: true};
        }
    } catch (error) {
        return {status: false, error};
    }
}
export { fetchProducts, addProduct, updateProduct, updateStatus };