import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchCompanyUsers } from "@adminjs/customer";
 
function UsersList({customerId, showEditModal, setEditData, refreshList=false}) {

    const [users, setUsers] = useState([]);
    const admin = useSelector((state) => state.admin.user);

    const loadUsers = async () => {
        try {
            const res = await fetchCompanyUsers(customerId, admin.token);
            setUsers(res || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadUsers();
        // eslint-disable-next-line
    }, []);

    useEffect(()=> {
        if(refreshList)
            loadUsers();
        // eslint-disable-next-line
    }, [refreshList]);

    return (
        <div className="w-full px-4 py-6">
            {users.length === 0 ? (
                <p className="text-center text-gray-500">No Users..</p>
            ) : (
                <div className="overflow-x-auto bg-white">
                    <table className="w-full min-w-[700px] text-sm text-left">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="px-4 py-3 border">Sl.No</th>
                                <th className="px-4 py-3 border">Role</th>
                                <th className="px-4 py-3 border">Name</th>
                                <th className="px-4 py-3 border">Email</th>
                                <th className="px-4 py-3 border">Phone</th> 
                                <th className="px-4 py-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{user.role}</td>
                                    <td className="px-4 py-2 border">{user.name}</td>
                                    <td className="px-4 py-2 border">{user.email}</td>
                                    <td className="px-4 py-2 border">{user.phone}</td> 
                                    <td className="px-4 py-2 border">
                                        <span className="link"
                                        onClick={()=>{setEditData(user);showEditModal(true);}}
                                        >
                                            Edit
                                        </span>
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

export default UsersList; 