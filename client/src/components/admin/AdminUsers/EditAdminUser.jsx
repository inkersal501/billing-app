import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Modal from "react-modal";

import { updateAdminUser } from '@adminjs/auth';

function EditAdminUser({isOpen, onRequestClose, editData=null}) {

    const {_id, name, email, phone, role}= editData; 
    const [form, setForm] = useState({_id, name, email, phone, role});

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
      
      const create = await updateAdminUser(form, token);
      if(create) {
          onRequestClose();
      }
    }

    useEffect(()=>{
      setForm(editData);
      //eslint-disable-next-line
    }, []);

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
                        <h3>Edit Admin Details</h3>
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
                        {/* <option value="Admin">Admin</option> */}
                        <option value="">Select Role</option>
                        <option value="CSM">CSM</option>
                        <option value="Staff">Staff</option>
                      </select>
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
 
export default EditAdminUser