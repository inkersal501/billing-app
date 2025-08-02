import React, { useState } from 'react';
import AddUser from '@admincomponents/CustomerDetails/AddUser';
import Details from '@admincomponents/CustomerDetails/Details';
import EditUser from '@admincomponents/CustomerDetails/EditUser';
import UsersList from '@admincomponents/CustomerDetails/UsersList';
import { useParams } from 'react-router-dom'

function CustomerDetails() {
    const { customerId } = useParams(); 

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
            <Details customerId={customerId}/>
            <div className='px-5'>
                <div className="text-end">
                    <button className='btn' onClick={()=>setShowAddModal(true)}>Add Users</button>
                </div>
            </div>
            <UsersList customerId={customerId} showEditModal={setShowEditModal} setEditData={setEditData} refreshList={refreshList}/>
            <AddUser customerId={customerId} isOpen={showAddModal} onRequestClose={onRequestClose} />
            <EditUser customerId={customerId} isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData} />
        </div>
    )
}

export default CustomerDetails