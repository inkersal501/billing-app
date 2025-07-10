import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/bills/Login';
import Dashboard from './pages/bills/Dashboard'; 
import Bills from './pages/bills/Bills'; 
import Landing from './pages/bills/Landing';
import Products from './pages/bills/Products';
   
function App() { 
   

  return (
    <BrowserRouter>  
      <Routes>

        {/* bills */}
        <Route path="/bills" element={<Login />} />
        <Route path="/bills/dashboard" element={<Dashboard />} />
        <Route path="/bills/dailybills" element={<Bills />} />
        <Route path="/bills/products" element={<Products />} />


        <Route path="/" element={<Landing />} /> 
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>     
    </BrowserRouter>
  )
}

export default App
