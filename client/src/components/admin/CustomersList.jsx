import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCustomers } from "@adminjs/customer";

function CustomersList() {
    const [customers, setCustomers] = useState();
    const [showCustomers, setShowCustomers] = useState(false);
    const admin = useSelector((state) => state.admin.user);

    const loadCustomers = async () => {
        try {
            const res = await fetchCustomers(admin.token);
            setCustomers([...res]);  
            setShowCustomers(res.length>0);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadCustomers();
        //eslint-disable-next-line
    }, []); 

    return (
        <div>
            {!showCustomers && <p className="text-center">No Customers..</p>}
            {showCustomers && 
            <div className="w-[100%] flex justify-center">
                <div>        
                    <table className="border text-dark">
                            <thead>
                                <tr>    
                                    <th className="px-4 py-2 border bg-primary">Sl.No</th>
                                    <th className="px-4 py-2 border bg-primary">Company Name</th>
                                    <th className="px-4 py-2 border bg-primary">Email</th>
                                    <th className="px-4 py-2 border bg-primary">Phone</th>
                                    <th className="px-4 py-2 border bg-primary">GST</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index)=>(
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{index+1}</td>
                                        <td className="px-4 py-2 border">{customer.name}</td>
                                        <td className="px-4 py-2 border">{customer.email}</td>
                                        <td className="px-4 py-2 border">{customer.phone}</td>
                                        <td className="px-4 py-2 border">{customer.gstNumber}</td>
                                    </tr>
                                ))}                
                            </tbody>
                    </table>
                </div>
            </div>
            }
        </div>
    );
}

export default CustomersList;
