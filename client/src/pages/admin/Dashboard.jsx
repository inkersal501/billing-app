
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
  
import { fetchCustomers } from '@adminjs/customer';

function Dashboard() { 

   const [customers, setCustomers] = useState(0); 
  const admin = useSelector((state) => state.admin.user);

  const loadCustomers = async () => {
    try {
      const res = await fetchCustomers(admin.token);
      setCustomers(res.length);   
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadCustomers();
    //eslint-disable-next-line
  }, []);
  
  return (
    <div>  
      <div className='p-4'>
        <div className="flex gap-10 text-center">
          <div className="border p-5 rounded-lg shadow">
            <h5>Total Customers</h5>
           <Link to="/admin/customers"><h2>{customers}</h2></Link>
          </div>
          <div className="border p-5 rounded-lg shadow">
            <h5>Bills Raised</h5>
           <h2>{""}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
