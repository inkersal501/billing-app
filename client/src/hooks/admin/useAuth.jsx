import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { logout } from '@store/adminSlice';

const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp < currentTime;
    } catch (error) {
        console.error(error);
        return true; 
    }
};

const useAuth = (redirect = "/admin/") => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const admin = useSelector((state) => state.admin);

    useEffect(() => {
        const checkAuth = () => {
             const token = admin?.user?.token;

            const shouldLogout = !admin.isLoggedin || !token || isTokenExpired(token);

            if (shouldLogout) {
                dispatch(logout());
                toast.error("Session expired or unauthorized.");
                navigate(redirect);
            }
        };

        checkAuth();
        // eslint-disable-next-line
    }, []); 
};

export default useAuth;
