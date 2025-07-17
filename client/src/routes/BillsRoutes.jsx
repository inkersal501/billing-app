import React from "react";
import { Routes, Route } from "react-router-dom";
import BillsLayout from "../layouts/BillsLayout";
import Login from "@billspages/Login";
import Dashboard from "@billspages/Dashboard";
import Bills from "@billspages/Bills";
import Products from "@billspages/Products";

const BillsRoutes = () => (
  <Routes>
    <Route index element={<Login />} />
    <Route element={<BillsLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dailybills" element={<Bills />} />
      <Route path="products" element={<Products />} />
    </Route>
  </Routes>
);

export default BillsRoutes;
