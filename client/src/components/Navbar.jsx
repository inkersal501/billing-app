import React from 'react'
import Logo from './Logo'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';
 
function Navbar() {

    const user = useSelector((state) => state.auth.user);
    const location = useLocation();
    return (
        <div className='bg-primary h-max-[10vh] flex justify-between items-center'>
            <div className='w-[50%] flex items-center gap-5'>
                <Logo width='20%' src="logo"/>
                <div className="">
                    <h4 className='nav-brand'>Hi, {user.name}</h4>
                </div>
            </div>
            <div className='w-[50%] flex gap-4 justify-end px-4'>
                <Link to="/dashboard"><span className={`nav-link ${location.pathname=='/dashboard'?'active':''}`}>Dashboard</span></Link>
                <Link to="/bills"><span className={`nav-link ${location.pathname=='/bills'?'active':''}`}>Bills</span></Link>
                <Link to="/products"><span className={`nav-link ${location.pathname=='/products'?'active':''}`}>Products</span> </Link>
                
                <a href="#" className='nav-link'>Logout</a>
            </div>
        </div>
    )
}

export default Navbar