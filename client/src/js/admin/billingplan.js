import { toast } from "react-toastify";
import {apiEndpoint} from "../config"; 
import axios from "axios"; 

const createBillingPlan = async (data, token) => {
    try {
        const result = await axios.post(`${apiEndpoint}/admin/plans`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 201){
            toast.success("Plan Created Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

const fetchBillingPlans = async (token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/plans`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            return result.data;    
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

const fetchActiveBillingPlans = async (token) => {
    try {
        const result = await axios.get(`${apiEndpoint}/admin/plans/active`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            return result.data;    
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

const updateBillingPlan = async (data, planId, token) => {
    try {
        const result = await axios.put(`${apiEndpoint}/admin/plans/${planId}`, {...data}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            toast.success("Plan details Updated Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};

const updatePlanStatus = async (plan, status, token) => {
    try {
        const result = await axios.patch(`${apiEndpoint}/admin/plans/status/${plan}`, {status}, {
            headers: {Authorization: `Bearer ${token}`}
        });
        if(result.status === 200){
            toast.success("Plan Status Updated Successully.");        
            return true;
        }
    } catch (error) {
        toast.error(error.response.data.error);
        return false;
    }
};
export {createBillingPlan, fetchBillingPlans, updateBillingPlan, fetchActiveBillingPlans, updatePlanStatus};