import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-modal";

import { createCompanyUser } from '@adminjs/customer';
import { updateRefreshCustomerDetails } from '@store/adminSlice';

function AddUser({customerId, isOpen, onRequestClose}) {

    const [form, setForm] = useState({name:"", email:"", phone:"", role: "", password: ""});
    const token = useSelector((state) => state.admin.user.token);
    const dispatch = useDispatch();

    const handleUpdate = (e) =>{  
        setForm({...form, [e.target.id] : e.target.value});
    }

    const handleForm = async (e) => {
        e.preventDefault();
        if(!form.name) {
          toast.error("Please provide Name"); return false;
        } else if(!form.email) {
          toast.error("Please provide Email"); return false;
        } else if(!form.phone) {
          toast.error("Please provide Phone"); return false;
        } else if(!form.role) {
          toast.error("Please provide Role"); return false;
        } else if(!form.password) {
          toast.error("Please provide Password"); return false;
        }
        
        const create = await createCompanyUser(form, customerId, token);
        if(create) {
            onRequestClose("add");
            dispatch(updateRefreshCustomerDetails(true));
        }
    }
    
    return (
        <Modal
              isOpen={isOpen}
              onRequestClose={()=>onRequestClose("add")}
              contentLabel="Add User"
              className="bg-white py-4 px-4 rounded-xl w-full max-w-md mx-auto mt-20 outline-none"
              overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
            >
        {/* <div className='flex justify-center'> */}
            <form onSubmit={handleForm}>
                <div className="py-4 px-4 flex flex-col gap-2">
                    <div className="text-center">
                        <h3>New User</h3>
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
                      <label htmlFor="role">Role</label>
                      <select id="role" className='input' onChange={handleUpdate} value={form.role}> 
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                      </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className='input' onChange={handleUpdate} value={form.password} />
                    </div>
                    <div className='my-2 text-center'>  
                        <button className='btn me-4' type='button' onClick={()=>onRequestClose("add")}>Close</button>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        {/* </div> */}
    </Modal>
    )
}
 
export default AddUser 