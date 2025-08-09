import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
 
import CustomersList from '@admincomponents/Customers/CustomersList'; 
import AddCustomer from '@admincomponents/Customers/AddCustomer';
import EditCustomer from '@admincomponents/Customers/EditCustomer';

function Customers() { 
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({});  

  const onRequestClose = (action) => {
    if(action === "add"){
      setShowAddModal(false);
    } else{
      setShowEditModal(false);
      setEditData({});
    } 
  }

  return (
    <div> 
      <div className='px-5'>
        <div className="flex justify-between">
          <div>
            <h2 className='text-xl'>Customers</h2>
          </div>
          <div className="text-end">
            <button className='btn' onClick={()=>setShowAddModal(true)}>New Customer</button>
          </div>
        </div>
      </div>
      <CustomersList showEditModal={setShowEditModal} setEditData={setEditData} />
      <AddCustomer isOpen={showAddModal} onRequestClose={onRequestClose} />
      <EditCustomer isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData} />
    </div>
  );
}

export default Customers;
