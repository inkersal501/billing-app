import React, { useState } from 'react';
 
import AdminUsersList from '@admincomponents/AdminUsers/AdminUsersList'; 
import AddAdminUser from '@admincomponents/AdminUsers/AddAdminUser';
import EditAdminUser from '@admincomponents/AdminUsers/EditAdminUser';

function AdminUsers() { 
 
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
        <div className="flex justify-between">
          <div>
            <h2 className='text-xl'>Admin Users</h2>
          </div>
          <div className="text-end">
            <button className='btn' onClick={()=>setShowAddModal(true)}>New Admin</button>
          </div>
        </div>
      </div>
      <AdminUsersList showEditModal={setShowEditModal} setEditData={setEditData} refreshList={refreshList}/>
      <AddAdminUser isOpen={showAddModal} onRequestClose={onRequestClose} />
      <EditAdminUser isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData}/>
    </div>
  );
}

export default AdminUsers;
