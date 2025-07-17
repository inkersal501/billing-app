import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Login from "@adminpages/Login";
import Dashboard from "@adminpages/Dashboard";
import Customers from "@adminpages/Customers";
import AddCustomer from "@adminpages/AddCustomer";

const AdminRoutes = () => (
  <Routes>
    <Route index element={<Login />} />
    <Route element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="customers" element={<Customers />} />
      <Route path="add-customer" element={<AddCustomer />} />
    </Route>
  </Routes>
);

export default AdminRoutes;
