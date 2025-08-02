import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
 
import CustomersList from '@admincomponents/Customers/CustomersList'; 
import AddCustomer from '@admincomponents/Customers/AddCustomer';
import EditCustomer from '@admincomponents/Customers/EditCustomer';

function Customers() { 
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({}); 
  const [refreshList, setRefreshList] = useState(false);

  const onRequestClose = (action, refresh = false, clear = false) => {
    if(action === "add"){
      setShowAddModal(false);
    } else{
      setShowEditModal(false);
      if(clear) setEditData({});
    }
    if(refresh) setRefreshList(true);  
  }

  return (
    <div> 
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>setShowAddModal(true)}>New Customer</button>
        </div>
      </div>
      <CustomersList showEditModal={setShowEditModal} setEditData={setEditData} refreshList={refreshList} />
      <AddCustomer isOpen={showAddModal} onRequestClose={onRequestClose} />
      <EditCustomer isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData} />
    </div>
  );
}

export default Customers;
