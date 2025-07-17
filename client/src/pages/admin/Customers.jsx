import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '@admincomponents/Header';
import CustomersList from '@admincomponents/CustomersList';
import useAuth from '@adminhooks/useAuth';

function Customers() {
  useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>navigate("/admin/add-customer")}>New Customer</button>
        </div>
      </div>
      <CustomersList />
    </div>
  );
}

export default Customers;
