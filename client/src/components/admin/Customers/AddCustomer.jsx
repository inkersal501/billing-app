import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Modal from "react-modal";

import { createCustomer } from '@adminjs/customer';

function AddCustomerForm({isOpen, onRequestClose}) {
    const [form, setForm] = useState({name:"", email:"", phone:"", address:"", gstNumber:"", logoUrl:""});
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
        }
        
        const create = await createCustomer(form, token);
        if(create) {
            onRequestClose();
        }
    }
    return (
        <Modal
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              contentLabel="Add Bill"
              className="bg-white py-4 px-4 rounded-xl w-full max-w-md mx-auto mt-20 outline-none"
              overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
            >
        {/* <div className='flex justify-center'> */}
            <form onSubmit={handleForm}>
                <div className="py-4 px-4 flex flex-col gap-2">
                    <div className="text-center">
                        <h3>New Customer</h3>
                    </div>
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
                    <div className='flex flex-col'>
                        <label htmlFor="address">Address</label>
                        <textarea id="address" className='input' cols="30" rows="4" onChange={handleUpdate} value={form.address} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="gstNumber">Gst Number</label>
                        <input type="text" id="gstNumber" className='input' onChange={handleUpdate} value={form.gstNumber} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="logoUrl">Logo URL</label>
                        <input type="text" id="logoUrl" className='input' onChange={handleUpdate} value={form.logoUrl} />
                    </div>
                    <div className='my-2 text-center'>  
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        {/* </div> */}
    </Modal>
    )
}

export default AddCustomerForm