import { registerBusiness } from '@js/config';
import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import { toast } from 'react-toastify';
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 

function Register({ isOpen, onRequestClose, activePlan }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gstNumber: "",
    logoUrl: "",
    plan: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const handleUpdate = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address || !form.plan || !form.password) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const create = await registerBusiness(form);
      if (create) {
        setSuccess(true);
        toast.success("Business registered successfully 🎉"); 
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }   
  };

  useEffect(() => {
    if (activePlan?._id) {
      setForm((prev) => ({ ...prev, plan: activePlan._id }));
    }
  }, [activePlan]);

  const InputField = ({ id, label, type = "text", value }) => (
    <div className="flex flex-col mb-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        className="input"
        onChange={handleUpdate}
        value={value}
        disabled={loading}
      />
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Business"
      className="bg-white py-6 px-6 rounded-2xl w-full max-w-lg mx-auto mt-20 outline-none max-h-[90vh] overflow-y-auto shadow-lg"
      overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
    >
      {success ? (
        <div className="flex flex-col items-center justify-center text-center p-6">
          <IoCheckmarkDoneOutline className="text-green-500 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Registration Successful 🎉</h2>
          <p className="text-gray-600 mb-6">
            Welcome, <b>{form.name}</b>! Your business is now registered with the <b>{activePlan?.name}</b> plan.
          </p>
          <div className="flex gap-4">
            <button
              onClick={onRequestClose}
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Close
            </button>
            <a
              href="/bills"
              className="btn bg-blue-600 text-white hover:bg-blue-700"
            >
              Go to Billing Dashboard
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleForm}>
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold">Register Your Business</h2>
            <p className="text-gray-600">Get Started with <b>{activePlan?.name}</b></p>
            <p className="text-gray-500 text-sm">
              ₹{activePlan?.priceMonthly} / Month or ₹{activePlan?.priceYearly} / Year
            </p>
          </div>

          <h3 className="text-gray-700 font-medium mb-2">Business Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <InputField id="name" label="Business Name" value={form.name} />
            <InputField id="phone" label="Phone" value={form.phone} />
            <InputField id="gstNumber" label="GST Number" value={form.gstNumber} />
            <InputField id="logoUrl" label="Logo URL" value={form.logoUrl} />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              className="input"
              rows="3"
              onChange={handleUpdate}
              value={form.address}
              required
              disabled={loading}
            />
          </div>

          <h3 className="text-gray-700 font-medium mb-2">Account Information</h3>
          <InputField id="email" label="Email" type="email" value={form.email} />

          <div className="flex flex-col mb-2 relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="input pr-10"
              onChange={handleUpdate}
              value={form.password}
              required
              disabled={loading}
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <p className="text-xs text-gray-500 mt-1">Used for login purpose.</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              type="button"
              className="btn bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={onRequestClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}

export default Register;
