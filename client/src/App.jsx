import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Bills Import
import BillsLogin from '@pages/bills/Login';
import BillsDashboard from '@pages/bills/Dashboard'; 
import Bills from '@pages/bills/Bills'; 
import Landing from '@pages/Landing';
import BillsProducts from '@pages/bills/Products';
// Admin Import
import AdminLogin from "@pages/admin/Login";

function App() { 
   

  return (
    <BrowserRouter>  
      <Routes>

        {/* bills */}
        <Route path="/bills" element={<BillsLogin />} />
        <Route path="/bills/dashboard" element={<BillsDashboard />} />
        <Route path="/bills/dailybills" element={<Bills />} />
        <Route path="/bills/products" element={<BillsProducts />} />

        {/* admin */}
        <Route path="/admin" element={<AdminLogin />} />
        {/* <Route path="/admin/dashboard" element={<Dashboard />} />  */}


        <Route path="/" element={<Landing />} /> 
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>     
    </BrowserRouter>
  )
}

export default App
