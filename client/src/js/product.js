import {apiEndpoint} from "./config"; 
import axios from "axios"; 

const fetchProducts = async () => {

    try {
        const result = await axios.get(`${apiEndpoint}/products`);
        if(result.status === 200){        
            return {status: true,data : result.data};
        }
    } catch (error) { 
        return {status: false, error};
    }
}
export { fetchProducts };