import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "@adminpages/Login";
import Dashboard from "@adminpages/Dashboard";
import Customers from "@adminpages/Customers"; 
import AdminUsers from "@adminpages/AdminUsers"; 
import CustomerDetails from "@adminpages/CustomerDetails";

const AdminRoutes = () => (
  <Routes>
    <Route index element={<Login />} />
    <Route element={<AdminLayout />}>      
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="customers" element={<Customers />} /> 
      <Route path="customers/:customerId" element={<CustomerDetails/>} /> 
      <Route path="users" element={<AdminUsers />} />      
    </Route>
  </Routes>
);

export default AdminRoutes;
