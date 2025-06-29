import React, { useEffect, useState } from "react";
import { fetchBills } from "../js/bill";
import AddBill from "./Addbill";
import { useSelector } from "react-redux";
 
const Billslist = () => {

  const user     = useSelector((state) => state.auth.user);
  const [bills, setBills] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const loadBills = async (start, end) => {
    let url = "";
    if (start && end) {
      url += `?startDate=${start}&endDate=${end}`;
    }

    try {
      const res = await fetchBills(url, user.token);
      setBills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setStartDate(today);
    setEndDate(today);
    loadBills(today, today);
    //eslint-disable-next-line
  }, []);

  const handleFilter = () => {
    if (startDate && endDate) {
      loadBills(startDate, endDate);
    }
  };
  const handleAddBill = (bill) => {
    setBills((prev)=>[...prev, bill]);
  }
  useEffect(()=>{ 
    const totalAmount = bills.reduce((accumulator, bill) => {
      return accumulator + bill.totalAmount;
    }, 0);
    setTotalAmount(totalAmount);
  }, [bills])
// console.log(bills)
  return (
    <div className="px-4">
      <div className="flex justify-between items-center py-4">
        <h1>Bills</h1>
        <div className="">
          <div className="flex gap-4 items-end">
            <div>
              <label className="block text-sm">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="input"
              />
            </div>
            <div>
              <button
                onClick={handleFilter}
                className="btn"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
        <button className="btn" onClick={() => setShowModal(true)}>New Bill</button>
      </div> 
      

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-primary">
            <tr>
              <th className="border px-2 py-2 text-left">Sl No.</th>
              <th className="border px-4 py-2 text-left">Bill No.</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Customer</th>
              <th className="border px-4 py-2 text-left">Total Amount</th>
              <th className="border px-4 py-2 text-left">Products</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              
              <tr key={bill._id}> 
                <td className="border px-2 py-2">{index+1}</td>
                <td className="border px-4 py-2">{bill.billNumber || "-"}</td>
                <td className="border px-4 py-2">
                  {new Date(bill.date).toLocaleDateString("en-IN") +" "+ new Date(bill.date).toLocaleTimeString("en-IN") }
                </td>
                <td className="border px-4 py-2">
                  {bill.customer?.name || "Anonymous"}
                </td>
                <td className="border px-4 py-2">
                  ₹ {bill.totalAmount?.toFixed(2)}
                </td>
                <td className="border px-4 py-2">
                  {bill.products
                    .map(
                      (p) =>
                        `${p.product?.name || "-"} x ${p.quantity} @ ₹${p.price}`
                    )
                    .join(", ")}
                </td>
              </tr>
            ))}
            {bills.length === 0 && (
              <tr>
                <td
                  colspan="5"
                  className="text-center text-gray-500 py-6"
                >
                  No bills found.
                </td>
              </tr>
              
            )}
          </tbody>
          {bills.length > 0 && (
            <tfoot className="bg-primary">
              <tr>
                <td colspan="4" className="text-end border px-4 py-2" >
                  Total
                </td>
                <td className="border px-4 py-2">₹ {totalAmount.toFixed(2)}</td>
                <td className="border px-4 py-2"></td>
              </tr>
            </tfoot>
          )}          
        </table>
      </div>
      <AddBill
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            onBillAdded={handleAddBill}
        />
    </div>
  );
};

export default Billslist; 