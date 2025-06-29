import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import Bills from './pages/Bills'; 
import Landing from './pages/Landing';
import Products from './pages/Products';
   
function App() { 
   

  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/bills" element={<Login />} />
        <Route path="/bills/dashboard" element={<Dashboard />} />
        <Route path="/bills/dailybills" element={<Bills />} />
        <Route path="/bills/products" element={<Products />} />
        <Route path="/" element={<Landing />} />
        {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} /> 
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />}  />  */}
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>     
    </BrowserRouter>
  )
}

export default App
