import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
 
import CustomersList from '@admincomponents/Customers/CustomersList'; 
import AddCustomerForm from '@admincomponents/Customers/AddCustomerForm';
import EditCustomerForm from '@admincomponents/Customers/EditCustomerForm';

function Customers() { 
  // const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editCustomerData, setEditCustomerData] = useState({}); 

  return (
    <div> 
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>setShowAddModal(true)}>New Customer</button>
        </div>
      </div>
      <CustomersList showEditModal={setShowEditModal} setEditCustomerData={setEditCustomerData}/>
      <AddCustomerForm isOpen={showAddModal} onRequestClose={() => setShowAddModal(false)} />
      <EditCustomerForm isOpen={showEditModal} onRequestClose={() => setShowEditModal(false)} customerData={editCustomerData}/>
    </div>
  );
}

export default Customers;
