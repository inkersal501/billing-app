import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBillingPlans, updatePlanStatus } from "@adminjs/billingplan";
import { updateRefreshBillingPlans } from '@store/adminSlice';

function BillingPlansList({showEditModal, setEditData}) {

    const [plans, setPlans] = useState([]);
    const admin = useSelector((state) => state.admin.user);
    const refreshList = useSelector((state) => state.admin.refreshAdminUsers);
    const dispatch = useDispatch();

    const loadBillingPlans = async () => {
        try {
            const res = await fetchBillingPlans(admin.token);
            setPlans(res || []);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadBillingPlans();
        // eslint-disable-next-line
    }, []);

    useEffect(()=> {
        if(refreshList){
            loadBillingPlans().then(()=> {
                dispatch(updateRefreshBillingPlans(false));
            });
        }
        // eslint-disable-next-line
    }, [refreshList]);

    const handleStatusChange = async (planId, currStatus, status) => {
        if(status !== currStatus){
            await updatePlanStatus(planId, status, admin.token);
            const updated = plans.map((plan)=>{
                if(plan._id === planId){
                    plan.isActive = status;
                }
                return plan;
            });
            setPlans(updated);
        }

    };

    return (
        <div className="w-full px-4 py-6">
            {plans.length === 0 ? (
                <p className="text-center text-gray-500">No Plans found..</p>
            ) : (
                <div className="overflow-x-auto bg-white">
                    <table className="w-full min-w-[700px] text-sm text-left">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="px-4 py-3 border">Sl.No</th>
                                <th className="px-4 py-3 border">Plan Name</th>
                                <th className="px-4 py-3 border">Monthly/Yearly Price</th>
                                <th className="px-4 py-3 border">Bills/month</th>
                                <th className="px-4 py-3 border">Max Users</th> 
                                <th className="px-4 py-3 border">Features</th> 
                                <th className="px-4 py-3 border">Status</th>  
                                <th className="px-4 py-3 border">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, index) => (
                                <tr key={plan._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{index + 1}</td> 
                                    <td className="px-4 py-2 border">{plan.name}</td>
                                    <td className="px-4 py-2 border">{plan.priceMonthly + "/" + plan.priceYearly}</td>
                                    <td className="px-4 py-2 border">{plan.limits.billsPerMonth}</td>
                                    <td className="px-4 py-2 border">{plan.limits.maxUsers}</td> 
                                    <td className="px-4 py-2 border">{plan.features.map((feature, index)=>(
                                      <li key={index}>{feature}</li>
                                    ))}</td>  
                                    <td className="px-4 py-2 border">
                                        <select id={"status"+plan._id} value={plan.isActive} onChange={(e)=>handleStatusChange(plan._id, plan.isActive, e.target.value)}>
                                            <option value={true} >Active</option>
                                            <option value={false} >Inactive</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <span className="link"
                                        onClick={()=>{setEditData(plan);showEditModal(true);}}
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
 
export default BillingPlansList