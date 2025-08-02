import { fetchCustomerDetails } from '@js/admin/customer';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Details({customerId}) {
    const [customer, setCustomer] = useState({});

    const token = useSelector((state) => state.admin.user.token);

    useEffect(()=> {
        const fetchCustomer = async (customerId) => {
            const data = await fetchCustomerDetails(customerId, token);
            setCustomer(data);
        };
        fetchCustomer(customerId);
        //eslint-disable-next-line
    }, [customerId]); 
    return (
        <div className='px-5'> 
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                {customer.logoUrl ? <img src={customer.logoUrl} alt={customer.name} className='w-25' /> : ""}
                <h2 className='text-xl'>{customer.name}</h2>
                </div>
                <div>
                    <Link to="/admin/customers" className='btn'>Back</Link>
                </div>
            </div>
            <div className='mt-4'>
                <div className="grid grid-cols-4"> 
                    <div>
                        <p>Email</p>
                        <p><strong>{customer.email}</strong></p>
                    </div>
                    <div>
                        <p>Phone</p>
                        <p><strong>{customer.phone}</strong></p>
                    </div>
                    <div>
                        <p>Address</p>
                        <p><strong>{customer.address}</strong></p>
                    </div>
                    <div>
                        <p>GST</p>
                        <p><strong>{customer.gstNumber}</strong></p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Details