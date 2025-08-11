import React from 'react'
import { FaEdit } from "react-icons/fa";

function Productcard({product, handleUpdateStatus, setEditData, showEditModal}) {
    return (
        <div className="bg-white border border-[#ccc] shadow-md rounded-2xl p-4 hover:shadow-lg hover:border-[#999] transition duration-300 w-xs">
            <div className="flex justify-between items-center">
                <div className="w-[50%]">
                    <p className='text-sm font-bold'>{product.name}</p>
                </div>
                <div className="w-[50%] text-end">
                    <p className='text-sm'>₹{product.price} / {product.unit}{product.measure}</p>
                </div>
            </div> 
            <div className="flex justify-between items-center mt-2">                 
                <div className=''>                     
                    <select id={`status${product._id}`} value={product.status}
                     onChange={(e)=>handleUpdateStatus(product._id, e.target.value)} 
                     className={`${product.status==="Available"?'bg-[green]':'bg-[red]'} text-white w-auto text-center appearance-none rounded-lg border border-[#ccc] text-xs px-2 py-1`}>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>
                <div>
                    <span className="link text-sm flex gap-1 items-center"
                        onClick={()=>{setEditData(product);showEditModal(true);}}
                    >
                        <FaEdit size={16}/>
                        Edit
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Productcard