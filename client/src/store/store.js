import { configureStore } from "@reduxjs/toolkit"; 
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
    reducer : { 
        auth : authReducer,
        products: productReducer,
        admin : adminReducer,
    }
});

export default store;