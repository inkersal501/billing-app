import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
 
import CustomersList from '@admincomponents/Customers/CustomersList'; 
import AddCustomer from '@admincomponents/Customers/AddCustomer';
import EditCustomer from '@admincomponents/Customers/EditCustomer';

function Customers() { 
  // const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({}); 

  return (
    <div> 
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>setShowAddModal(true)}>New Customer</button>
        </div>
      </div>
      <CustomersList showEditModal={setShowEditModal} setEditData={setEditData}/>
      <AddCustomer isOpen={showAddModal} onRequestClose={() => setShowAddModal(false)} />
      <EditCustomer isOpen={showEditModal} onRequestClose={() => setShowEditModal(false)} editData={editData}/>
    </div>
  );
}

export default Customers;
