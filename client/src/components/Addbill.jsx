import React, { useEffect, useState } from "react";
import Modal from "react-modal"; 
import { fetchProducts } from "../js/product";
import { fetchCustomers } from "../js/customer";
import { useSelector } from "react-redux";
import { addBill } from "../js/bill";

const AddBill = ({ isOpen, onRequestClose, onBillAdded }) => {

    const user     = useSelector((state) => state.auth.user);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    const [selectedCustomer, setSelectedCustomer] = useState("");
    const [billProducts, setBillProducts] = useState([]);

    const [total, setTotal] = useState(0);
    
    const loadCustomers = async () => { 
        const res = await fetchCustomers(user.token);
        if(res.status)
            setCustomers(res.data); 
    };

    const loadProducts = async () => { 
        const res = await fetchProducts(user.token);
        if(res.status)
            setProducts(res.data);         
    };

    const resetForm = () => {
        setSelectedCustomer("");
        setBillProducts([]);
        setTotal(0);
    };

    useEffect(() => {
        if (isOpen) {
            loadCustomers();
            loadProducts();
            resetForm();
        }
        //eslint-disable-next-line
    }, [isOpen]);

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

        const payload = {
            customer: selectedCustomer || null,
            products: billProducts.map((item) => ({
                product: item.productId,
                quantity: Number(item.quantity),
                price: Number(item.price),
            })),
            totalAmount: total,
        };

        try {
            const res = await addBill(payload, user.token) 
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
        contentLabel="Add Product"
        className="bg-white p-6 rounded-xl w-[90%] max-w-md mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 modal-overlay bg-opacity-50 flex justify-center items-start z-50"
    >
        <h2 className="text-xl font-semibold mb-4">Add New Bill</h2>

        <div className="space-y-3">
            {/* Customer selection */}
            <select
                className="w-full border p-2 rounded-md"
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
            >
            <option value="">Anonymous Customer</option>
                {customers.map((cust) => (
                    <option key={cust._id} value={cust._id}>
                        {cust.name}
                    </option>
                ))}
            </select>

            {/* Products list */}
            {billProducts.map((item, index) => (
            <div
                key={index}
                className="flex items-center gap-2 border p-2 rounded"
            >
                <select
                    className="flex-1 border p-2 rounded"
                    value={item.productId}
                    onChange={(e) =>handleProductChange(index, "productId", e.target.value)}
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
                    onChange={(e) =>handleProductChange(index, "quantity", e.target.value)}
                    min="1"
                />

                <input
                    type="number"
                    className="w-24 border p-2 rounded"
                    value={item.price}
                    onChange={(e) => handleProductChange(index, "price", e.target.value)}
                />

                <button
                    onClick={() => handleRemoveProduct(index)}
                    className="text-red-600"
                >
                    ✖
                </button>
            </div>
            ))}

            <button
            onClick={handleAddProduct}
            className="btn"
            >
            Add Product
            </button>

            {/* Total */}
            <div className="mt-4 text-lg font-bold">
            Total: ₹ {total.toFixed(2)}
            </div>
        </div>

      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={onRequestClose}
          className="btn"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="btn"
        >
          Save Bill
        </button>
      </div>
    </Modal>
  );
};

export default AddBill;
