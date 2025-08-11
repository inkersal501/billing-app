import Header from "@admincomponents/Header";
import { Outlet } from "react-router-dom"; 

import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isTokenExpired } from "../js/config";
import { toast } from "react-toastify";
import { logout } from '@store/adminSlice';
 
const AdminLayout = () => {
  
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValid = useMemo(() => {
    const logout = admin.logout || false; 
    if(logout) return logout;
    const token = admin?.user?.token;
    if (!admin?.isLoggedin || !token) return false;
    return !isTokenExpired(token);
  }, [admin]);

  useEffect(() => {
    if (!isValid) {
      dispatch(logout());
      toast.error("Unauthorized access or session expired");
      navigate("/admin", { replace: true });
    }
  }, [isValid, dispatch, navigate]);

  if (!isValid) return null;

  return (
    <div>
      <Header />
      <Outlet />      
    </div>
  );
};

export default AdminLayout;