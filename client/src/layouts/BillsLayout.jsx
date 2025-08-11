import Navbar from "@billscomponents/Navbar";
import { Outlet } from "react-router-dom";

import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isTokenExpired } from "../js/config";
import { toast } from "react-toastify";
import { logout } from '@store/billsSlice';

const BillsLayout = () => {

  const {user, isLoggedin} = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValid = useMemo(() => {
    const logout = user.logout || false; 
    if(logout) return logout;
    const token = user?.token;
    if (!isLoggedin || !token) return false;
    return !isTokenExpired(token);
  }, [user, isLoggedin]);

  useEffect(() => {
    if (!isValid) {
      dispatch(logout());
      toast.error("Unauthorized access or session expired");
      navigate("/bills", { replace: true });
    }
  }, [isValid, dispatch, navigate]);

  if (!isValid) return null;

  return (
    <div> 
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BillsLayout;