import React, { useState } from 'react';
 
import BillingPlansList from '@admincomponents/BillingPlans/BillingPlansList'; 
import AddBillingPlan from '@admincomponents/BillingPlans/AddBillingPlan';
import EditBillingPlan from '@admincomponents/BillingPlans/EditBillingPlan';

function BillingPlans() {
 
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
            <h2 className='text-xl'>Billing Plans</h2>
          </div>
          <div className="text-end">
            <button className='btn' onClick={()=>setShowAddModal(true)}>New Plan</button>
          </div>
        </div>
      </div>
      <BillingPlansList showEditModal={setShowEditModal} setEditData={setEditData} />
      <AddBillingPlan isOpen={showAddModal} onRequestClose={onRequestClose} />
      <EditBillingPlan isOpen={showEditModal} onRequestClose={onRequestClose} editData={editData} />
    </div>
  );
}
 
export default BillingPlans;