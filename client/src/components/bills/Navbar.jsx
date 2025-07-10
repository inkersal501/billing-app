import React from 'react'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
 
function Navbar() {

    const user = useSelector((state) => state.auth.user);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/");
        window.location.reload;
    }
    return (
        <div className='bg-primary h-max-[10vh] flex justify-between items-center'>
            <div className='w-[50%] flex items-center gap-5'>
                <Logo width='20%' src="logo"/>
                <div className="">
                    <h4 className='nav-brand'>Hi, {user.name}</h4>
                </div>
            </div>
            <div className='w-[50%] flex gap-4 justify-end px-4'>
                <Link to="/bills/dashboard"><span className={`nav-link ${location.pathname=='/bills/dashboard'?'active':''}`}>Dashboard</span></Link>
                <Link to="/bills/dailybills"><span className={`nav-link ${location.pathname=='/bills/dailybills'?'active':''}`}>Bills</span></Link>
                <Link to="/bills/products"><span className={`nav-link ${location.pathname=='/bills/products'?'active':''}`}>Products</span> </Link>
                
                <a href="#" onClick={handleLogout} className='nav-link'>Logout</a>
            </div>
        </div>
    )
}

export default Navbar