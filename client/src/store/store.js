import { configureStore } from "@reduxjs/toolkit"; 
// import authReducer from "./authSlice";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";
import billsReducer from "./billsSlice";

const store = configureStore({
    reducer : { 
        // auth : authReducer,
        products: productReducer,
        admin : adminReducer,
        bills : billsReducer,
    }
});

export default store;