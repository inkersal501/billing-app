import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAdminUsers } from "@adminjs/auth";
 
function AdminUsersList({showEditModal, setEditData}) {

    const [adminUsers, setAdminUsers] = useState([]);
    const admin = useSelector((state) => state.admin.user);

    const loadAdminUsers = async () => {
        try {
            const res = await fetchAdminUsers(admin.token);
            setAdminUsers(res || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadAdminUsers();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="w-full px-4 py-6">
            {adminUsers.length === 0 ? (
                <p className="text-center text-gray-500">No Admin Users..</p>
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
                            {adminUsers.map((user, index) => (
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

export default AdminUsersList; 