import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-toastify";
import { logout } from '@store/adminSlice';
import { useDispatch, useSelector } from 'react-redux';

const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // in seconds
        return decoded.exp < currentTime;
        //eslint-disable-next-line
    } catch (e) {
        return true; // treat broken tokens as expired
    }
};
 
const useAuth = (redirect = "/admin/")=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const admin = useSelector((state)=> state.admin);  

    useEffect(() => {     
        if (!admin['isLoggedin'] || isTokenExpired(admin.user.token)) {
            dispatch(logout());
            toast.error("Logged out.");
            navigate(redirect);
        }
        // eslint-disable-next-line
    }, [admin]);
}

export default useAuth;