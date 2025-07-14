import Header from '@components/admin/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';
 

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>navigate("/admin/add-customer")}>New Customer</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
