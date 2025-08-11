import UsersList from '@billscomponents/Users/UsersList';
import AddUser from '@billscomponents/Users/AddUser';
import EditUser from '@billscomponents/Users/EditUser';

import React, {useState} from 'react'

function Users() {

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
            <h2 className='text-xl'>Staffs</h2>
          </div>
          <div className="text-end">
            <button className='btn' onClick={()=>setShowAddModal(true)}>New Staff</button>
          </div>
        </div>
      </div>
      <UsersList showEditModal={setShowEditModal} setEditData={setEditData}/>
      <AddUser isOpen={showAddModal} onRequestClose={onRequestClose} />
      <EditUser isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData}/>
    </div>
  )
}

export default Users