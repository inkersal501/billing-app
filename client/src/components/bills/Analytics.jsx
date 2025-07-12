import React, { useEffect, useState } from "react";
import { fetchBills } from "@js/bills/bill";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const Analytics = () => {
  const user = useSelector((state) => state.auth.user);
  const [bills, setBills] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
//   const [totalAmount, setTotalAmount] = useState(0);

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
    // eslint-disable-next-line
  }, []);

  const handleFilter = () => {
    if (startDate && endDate) {
      loadBills(startDate, endDate);
    }
  };

//   useEffect(() => {
//     const totalAmount = bills.reduce((acc, bill) => {
//       return acc + bill.totalAmount;
//     }, 0);
//     setTotalAmount(totalAmount);
//   }, [bills]);

  // Prepare chart data: Sales Over Time
  const salesByDate = bills.reduce((acc, bill) => {
    const dateKey = new Date(bill.date).toISOString().slice(0, 10);
    acc[dateKey] = (acc[dateKey] || 0) + bill.totalAmount;
    return acc;
  }, {});

  const chartData = Object.entries(salesByDate).map(([date, total]) => ({
    date,
    total,
  }));

  // Prepare chart data: Top Products
  const productTotals = {};
  bills.forEach((bill) => {
    bill.products.forEach((item) => {
      const name = item.product?.name || "-";
      productTotals[name] = (productTotals[name] || 0) + item.quantity;
    });
  });

  const topProductsData = Object.entries(productTotals).map(
    ([name, quantity]) => ({
      name,
      quantity,
    })
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

  return (
    <div className="px-4">
      <div className="flex justify-between items-center py-4">
        <h1>Dashboard</h1>
        <div>
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
              <button onClick={handleFilter} className="btn">
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Sales Over Time */}
        <div className="h-64">
          <h2 className="mb-2 font-bold">Sales Over Time</h2>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500">No data for chart.</p>
          )}
        </div>

        {/* Top Products */}
        <div className="h-64">
          <h2 className="mb-2 font-bold">Top Products</h2>
          {topProductsData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProductsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity">
                  {topProductsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500">No data for chart.</p>
          )}
        </div>
      </div>

       
    </div>
  );
};

export default Analytics;
