import React, { useState } from 'react';
 
import AdminUsersList from '@admincomponents/AdminUsers/AdminUsersList'; 
import AddAdminUser from '@admincomponents/AdminUsers/AddAdminUser';
import EditAdminUser from '@admincomponents/AdminUsers/EditAdminUser';

function AdminUsers() { 
  // const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState({}); 

  return (
    <div> 
      <div className='px-5'>
        <div className="text-end">
          <button className='btn' onClick={()=>setShowAddModal(true)}>New Admin</button>
        </div>
      </div>
      <AdminUsersList showEditModal={setShowEditModal} setEditData={setEditData}/>
      <AddAdminUser isOpen={showAddModal} onRequestClose={() => setShowAddModal(false)} />
      <EditAdminUser isOpen={showEditModal} onRequestClose={() => setShowEditModal(false)} editData={editData}/>
    </div>
  );
}

export default AdminUsers;
