import { createSlice } from "@reduxjs/toolkit"; 
import { defaultState } from "@js/config";

const initialState = { 
  isLoggedin : localStorage.getItem("isLoggedin") || defaultState.bills.isLoggedin,
  user : JSON.parse(localStorage.getItem("user")) || defaultState.bills.user,  
};

const billsSlice = createSlice({
  name : "bills",
  initialState,
  reducers : { 
    login : (state, action) => {
      state.user = {...state.user, ...action.payload};
      state.isLoggedin = true;
      localStorage.setItem("isLoggedin", JSON.stringify(state.isLoggedin));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout : (state) => {
      state.user = defaultState.bills.user;
      state.isLoggedin = defaultState.bills.isLoggedin; 
      state.logout = true;
      localStorage.setItem("isLoggedin", JSON.stringify(defaultState.bills.isLoggedin));
      localStorage.setItem("user", JSON.stringify(defaultState.bills.user));
    }, 
    updateRefreshUsers : (state, action) => {
        state.refreshUsers = action.payload;
    },
  },
});
   
export const { login, logout, updateRefreshUsers } = billsSlice.actions;
export default billsSlice.reducer; 
