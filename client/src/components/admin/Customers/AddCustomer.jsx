import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Modal from "react-modal";

import { createCustomer } from '@adminjs/customer';
import { fetchActiveBillingPlans } from '@js/admin/billingplan';
 
function AddCustomerForm({isOpen, onRequestClose}) {
    
    const [form, setForm] = useState({name:"", email:"", phone:"", address:"", gstNumber:"", logoUrl:"", plan: ""});
    const [plans, setPlans] = useState([]);
    const token = useSelector((state) => state.admin.user.token);
    
    const handleUpdate = (e) =>{  
        setForm({...form, [e.target.id] : e.target.value});
    }

    const handleForm = async (e) => {
        e.preventDefault();
        if(!form.name) {
            toast.error("Please provide Name"); return false;
        } if(!form.email) {
            toast.error("Please provide Email"); return false;
        } if(!form.phone) {
            toast.error("Please provide Phone"); return false;
        } if(!form.address) {
            toast.error("Please provide Address"); return false;
        } if(!form.plan) {
            toast.error("Please provide Plan"); return false;
        }
        
        const create = await createCustomer(form, token);
        if(create) {
            onRequestClose("add", true);
        }
    }
    useEffect(()=> {
        const loadBillingPlans = async () => {
            try {
                const res = await fetchActiveBillingPlans(token);
                setPlans(res || []);
            } catch (err) {
                console.error(err);
            }
        };
        loadBillingPlans();
    },[token]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={()=>onRequestClose("add")}
            contentLabel="Add Bill"
            className="bg-white py-4 px-4 rounded-xl w-full max-w-xl mx-auto mt-20 outline-none max-h-[90vh] overflow-y-auto"
            overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
        > 
            <form onSubmit={handleForm}>
                <div className="py-4 px-4 flex flex-col gap-2">
                    <div className="text-center">
                        <h3>New Customer</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <div className='flex flex-col'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className='input' onChange={handleUpdate} value={form.name} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" className='input' onChange={handleUpdate} value={form.email} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" className='input' onChange={handleUpdate} value={form.phone} />
                            </div>
                        </div>
                        <div>                        
                            <div className='flex flex-col'>
                                <label htmlFor="gstNumber">Gst Number</label>
                                <input type="text" id="gstNumber" className='input' onChange={handleUpdate} value={form.gstNumber} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="logoUrl">Logo URL</label>
                                <input type="text" id="logoUrl" className='input' onChange={handleUpdate} value={form.logoUrl} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="plan">Plan</label>
                                <select id="plan" onChange={handleUpdate} value={form.plan} className='input'>
                                    <option value="">Select Plan</option>
                                    {plans.map((plan) => (
                                        <option value={plan._id} key={plan._id}>{plan.name} Rs. {plan.priceMonthly +"/"+plan.priceYearly}</option>
                                    ))}
                                </select>
                            </div>
                        </div>                        
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <label htmlFor="address">Address</label>
                            <textarea id="address" className='input' cols="30" rows="4" onChange={handleUpdate} value={form.address} />
                        </div>
                    </div>
                    <div className='my-2 text-center'>  
                        <button className='btn me-4' type='button' onClick={()=>onRequestClose("add")}>Close</button>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </div>
            </form> 
        </Modal>
    )
}

export default AddCustomerForm