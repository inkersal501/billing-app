import React, { useState, useEffect } from "react";
import Modal from 'react-modal';

const EditProduct = ({ isOpen, onRequestClose, onSubmit, editData=null }) => {
  
    const [form, setForm] = useState({});
    const [editId, setEditId] = useState(null);

    useEffect(()=> {
      if(editData){ 
        const {_id, name, price, unit, measure} = editData;
        setForm({name, price, unit, measure});
        setEditId(_id);
      }
    }, [editData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.unit || !form.measure) {
      alert("Please fill all required fields");
      return;
    }

    await onSubmit(editId, form);  
    onRequestClose();      
    setForm({ name: "", price: "", unit: "", measure: "" });
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Product Details"
      className="bg-white p-6 rounded-xl w-[90%] max-w-md mx-auto mt-20 outline-none"
      overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
    >
        <h2 className="text-xl font-semibold mb-4">Edit Product Details</h2>

        <div className="space-y-3">
          <input name="name" value={form.name} onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md" placeholder="Product Name *" />
          <input name="price" value={form.price} onChange={handleChange}
            type="number" className="w-full border px-3 py-2 rounded-md" placeholder="Price *" />
          <input name="unit" value={form.unit} onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md" placeholder="Unit (e.g. 1 2 5 10)" />
          <input name="measure" value={form.measure} onChange={handleChange}
            className="w-full border px-3 py-2 rounded-md" placeholder="Measure (e.g. kg, ltr, gram, cup)" /> 
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button onClick={onRequestClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md">
            Cancel
          </button>
          <button onClick={handleSubmit}
            className="btn">
            Submit
          </button>
        </div>
    </Modal>
  );
};

export default EditProduct;
