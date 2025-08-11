import { createSlice } from "@reduxjs/toolkit"; 
import { defaultState } from "@js/config";
 
const initialState = defaultState.admin; 

const adminSlice = createSlice({
  name : "admin",
  initialState: initialState,
  reducers : { 
    login : (state, action) => {
      state.user = {...state.admin, ...action.payload};
      state.isLoggedin = true; 
      localStorage.setItem("admin", JSON.stringify({...state}));
    },
    logout : (state) => {  
        state.user = initialState.user;    
        state.isLoggedin = initialState.isLoggedin;  
        state.logout = true;   
        localStorage.removeItem("admin"); 
    }, 
    updateRefreshAdminUsers : (state, action) => {
      state.refreshAdminUsers = action.payload;
    },
    updateRefreshBillingPlans : (state, action) => {
      state.refreshBillingPlans = action.payload;
    },
    updateRefreshCustomers : (state, action) => {
      state.refreshCustomers = action.payload;
    },
    updateRefreshCustomerDetails : (state, action) => {
      state.refreshCustomerDetails = action.payload;
    },
  },
});
   
export const { 
  login, logout, 
  updateRefreshAdminUsers, updateRefreshBillingPlans, updateRefreshCustomers, updateRefreshCustomerDetails 
} = adminSlice.actions;
export default adminSlice.reducer; 
