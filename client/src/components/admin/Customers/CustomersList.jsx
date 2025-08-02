import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCustomers } from "@adminjs/customer";
import { Link } from "react-router-dom";
  
function CustomersList({showEditModal, setEditData, refreshList=false}) {

    const [customers, setCustomers] = useState([]);
    const admin = useSelector((state) => state.admin.user);

    const loadCustomers = async () => {
        try {
            const res = await fetchCustomers(admin.token);
            setCustomers(res || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadCustomers();
        // eslint-disable-next-line
    }, []);

    useEffect(()=> {
        if(refreshList)
            loadCustomers();
        // eslint-disable-next-line
    }, [refreshList]);
    
    return (
        <div className="w-full px-4 py-6">
            {customers.length === 0 ? (
                <p className="text-center text-gray-500">No Customers..</p>
            ) : (
                <div className="overflow-x-auto bg-white">
                    <table className="w-full min-w-[700px] text-sm text-left">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="px-4 py-3 border">Sl.No</th>
                                <th className="px-4 py-3 border">Company Name</th>
                                <th className="px-4 py-3 border">Email</th>
                                <th className="px-4 py-3 border">Phone</th>
                                <th className="px-4 py-3 border">GST</th>
                                <th className="px-4 py-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={customer._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{customer.name}</td>
                                    <td className="px-4 py-2 border">{customer.email}</td>
                                    <td className="px-4 py-2 border">{customer.phone}</td>
                                    <td className="px-4 py-2 border">{customer.gstNumber}</td>
                                    <td className="px-4 py-2 border">
                                        <span className="link"
                                        onClick={()=>{setEditData(customer);showEditModal(true);}}
                                        >
                                            Edit
                                        </span>
                                        <Link to={`/admin/customers/${customer._id}`} className="link ms-4">View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default CustomersList;
