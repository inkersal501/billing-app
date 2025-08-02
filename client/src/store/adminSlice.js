import { createSlice } from "@reduxjs/toolkit"; 
import { defaultState } from "@js/config";

const storage = JSON.parse(localStorage.getItem("admin"));
const initialState = defaultState.admin; 

const adminSlice = createSlice({
  name : "admin",
  initialState: storage ? storage : initialState,
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
  },
});
   
export const { login, logout } = adminSlice.actions;
export default adminSlice.reducer; 
