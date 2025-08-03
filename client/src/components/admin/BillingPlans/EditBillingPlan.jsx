import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Modal from "react-modal";
 
import { updateBillingPlan } from '@adminjs/billingplan';
import { MdRemoveCircle } from 'react-icons/md';

function EditBillingPlan({isOpen, onRequestClose, editData=null}) {

  const [form, setForm] = useState({});
  useEffect(()=> {
    if(editData){ 
      setForm(editData);
    }
  }, [editData]);

  const token = useSelector((state) => state.admin.user.token);
    
  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...form.features];
    updatedFeatures[index] = value;
    setForm({ ...form, features: updatedFeatures });
  };

  const addFeatureField = () => {
    setForm({ ...form, features: [...form.features, ""] });
  };

  const removeFeatureField = (index) => {
    const updatedFeatures = [...form.features];
    updatedFeatures.splice(index, 1);
    setForm({ ...form, features: updatedFeatures });
  };
  
  const handleUpdate = (e) => { 
    if(e.target.id === "billsPerMonth" || e.target.id === "maxUsers"){
      setForm({...form, limits:{...form.limits, [e.target.id]: e.target.value}});
    }else{
      setForm({...form, [e.target.id] : e.target.value});
    }
  };
 
  const handleForm = async (e) => {
    e.preventDefault();
    const { name, priceMonthly, priceYearly } = form;

    if (!name || !priceMonthly || !priceYearly) {
      toast.error("Name, Monthly and Yearly prices are required");
      return;
    }

    const payload = {
      name: form.name,
      priceMonthly: Number(form.priceMonthly),
      priceYearly: Number(form.priceYearly),
      features: form.features.map(f => f.trim()).filter(f => f !== ""),
      limits: {
        billsPerMonth: Number(form.limits.billsPerMonth),
        maxUsers: Number(form.limits.maxUsers)
      }, 
    };

    const update = await updateBillingPlan(payload, form._id, token);
    if (update) { 
      onRequestClose("edit", true, true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose("add")}
      contentLabel="Add Billing Plan"
      className="bg-white py-4 px-4 rounded-xl w-full max-w-md mx-auto mt-20 outline-none max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
    > 
      <form onSubmit={handleForm}>
        <div className="py-4 px-4 flex flex-col gap-2">
          <div className="text-center">
            <h3 className="text-center font-semibold text-lg">Edit Billing Plan</h3>
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Billing Name</label>
            <input id="name" className="input" value={form.name} onChange={handleUpdate} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="priceMonthly">Monthly Price</label>
            <input id="priceMonthly" type="number" className="input" value={form.priceMonthly} onChange={handleUpdate} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="priceYearly">Yearly Price</label>
            <input id="priceYearly" type="number" className="input" value={form.priceYearly} onChange={handleUpdate} />
          </div>

          <div className="flex flex-col">
            <label>Features</label>
            {form.features && form.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <input
                  type="text"
                  className="input flex-1"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                />
                {form.features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeatureField(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdRemoveCircle size={16}/>
                </button>
                )}
              </div>
            ))}
            {form.features && form.features.length < 10 && 
            (<div className="text-end">
            <button
            type="button"
            onClick={addFeatureField}
            className="text-blue-600 mt-1 text-sm hover:underline"
            >
            + Add Feature
            </button></div>)
            }
          </div>

          <div className="flex flex-col">
            <label htmlFor="billsPerMonth">Bills Per Month</label>
            <input id="billsPerMonth" type="number" className="input" value={form.limits?.billsPerMonth} onChange={handleUpdate} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="maxUsers">Max Users</label>
            <input id="maxUsers" type="number" className="input" value={form.limits?.maxUsers} onChange={handleUpdate} />
          </div>
          <div className='my-2 text-center'>  
            <button className='btn me-4' type='button' onClick={()=>onRequestClose("edit", false, true)}>Close</button>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </div>
      </form> 
    </Modal>
  )
}

export default EditBillingPlan