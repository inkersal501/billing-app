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
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/products" element={<Products />} />
        <Route path="/welcome" element={<Landing />} />
        {/* <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} /> 
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />}  />  */}
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>     
    </BrowserRouter>
  )
}

export default App
