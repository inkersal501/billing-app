import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

import { fetchProducts } from "@billsjs/product";
import { addBill } from "@billsjs/bill";
import { searchCustomersbyPhone } from "@billsjs/customer";

const AddBill = ({ isOpen, onRequestClose, onBillAdded }) => {

  const {token} = useSelector((state) => state.bills.user);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const [cName, setCName] = useState("");
  const [cMobile, setCMobile] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const [billProducts, setBillProducts] = useState([]);
  const [total, setTotal] = useState(0);
  let debounceTimer = null;

  const loadProducts = async () => {
    const res = await fetchProducts(token);
    if (res.status) setProducts(res.data);
  };

  const resetForm = () => {
    setCName("");
    setCMobile("");
    setIsAnonymous(false);
    setBillProducts([]);
    setTotal(0);
  };

  useEffect(() => {
    if (isOpen) {
      loadProducts();
      resetForm();
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handlePhoneChange = async (val) => {
    setCMobile(val);
    if (val.trim() === "") {
      return;
    }
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    if(val.length >= 4){       

      debounceTimer = setTimeout(async () => {
        const res = await searchCustomersbyPhone(val, token);
        if (res.status) {
          setCustomers(res.data);
        } else {
          setCustomers([]);
        }
      }, 500); 
    }
  };
  const handleCustomerSelect = (cust) => {
    setCMobile(cust.phone);
    setCName(cust.name);
    setCustomers([]);
  };

  const handleAddProduct = () => {

    setBillProducts((prev) => [
      ...prev,
      {
        productId: "",
        quantity: 1,
        price: 0,
      },
    ]);
  };

  const handleProductChange = (index, field, value) => {
    const updated = [...billProducts];
    updated[index][field] = value;

    if (field === "productId" && value) {
      const prod = products.find((p) => p._id === value);
      updated[index].price = prod?.price || 0;
    }

    setBillProducts(updated);
    calculateTotal(updated);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => {
      const price = parseFloat(item.price || 0);
      const qty = parseFloat(item.quantity || 0);
      return sum + price * qty;
    }, 0);
    setTotal(total);
  };

  const handleRemoveProduct = (index) => {
    const updated = billProducts.filter((_, i) => i !== index);
    setBillProducts(updated);
    calculateTotal(updated);
  };

  const handleSubmit = async () => {
    if (billProducts.length === 0) {
      alert("Please add at least one product");
      return;
    }
    if(!billProducts[0].productId){
      alert("Please add product");
      return;
    }

    const payload = {  
      customer: isAnonymous ? null : { name: cName, phone: cMobile, },
      products: billProducts.map((item) => ({
        product: item.productId,
        quantity: Number(item.quantity),
        price: Number(item.price),
      })),
      totalAmount: total,
    };

    try {
      const res = await addBill(payload, token);
      onRequestClose();
      onBillAdded(res.data);
    } catch (err) {
      console.error(err);
      alert("Error saving bill");
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Bill"
      className="bg-white p-6 rounded-xl w-[90%] max-w-md mx-auto mt-20 outline-none"
      overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Bill</h2>

      <div className="space-y-3">
        {/* Anonymous Toggle */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="appearance-none w-5 h-5 border-2 border-green-600 rounded-sm checked:bg-green-600 checked:border-green-600 transition-colors duration-200"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
          <span>Anonymous Customer</span>
        </label> 

        {!isAnonymous && (
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                value={cMobile}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="Phone Number"
                className="w-full border p-2 rounded-md"
              />
              {customers.length > 0 && (
                <ul className="absolute w-100 bg-white border border-gray-300 rounded shadow mt-1 max-h-60 overflow-auto z-10">
                  {customers.map((cust) => (
                    <li
                      key={cust._id}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleCustomerSelect(cust)}
                    >
                      {cust.name} - {cust.phone}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              type="text"
              value={cName}
              onChange={(e) => setCName(e.target.value)}
              placeholder="Customer Name"
              className="w-full border p-2 rounded-md"
            />
          </div>
        )}

        {/* Products list */}
        {billProducts.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border p-2 rounded"
          >
            <select
              className="flex-1 border p-2 rounded"
              value={item.productId}
              onChange={(e) =>
                handleProductChange(index, "productId", e.target.value)
              }
            >
              <option value="">Select product</option>
              {products.map((prod) => (
                <option key={prod._id} value={prod._id}>
                  {prod.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              className="w-20 border p-2 rounded"
              value={item.quantity}
              onChange={(e) =>
                handleProductChange(index, "quantity", e.target.value)
              }
              min="1"
            />

            <input
              type="number"
              className="w-24 border p-2 rounded"
              value={item.price}
              onChange={(e) =>
                handleProductChange(index, "price", e.target.value)
              }
              readOnly
            />

            <button
              onClick={() => handleRemoveProduct(index)}
              className="text-red-600"
            >
              ✖
            </button>
          </div>
        ))}

        <button onClick={handleAddProduct} className="btn">
          Add Product
        </button>

        {/* Total */}
        <div className="mt-4 text-lg font-bold">
          Total: ₹ {total.toFixed(2)}
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button onClick={onRequestClose} className="btn">
          Cancel
        </button>
        <button onClick={handleSubmit} className="btn">
          Save Bill
        </button>
      </div>
    </Modal>
  );
};

export default AddBill;
