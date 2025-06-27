import React from 'react'

function Productcard({product, handleUpdateStatus}) {
    return (
        <div className="bg-white border border-[#ccc] shadow-md rounded-2xl p-4 hover:shadow-lg hover:border-[#999] transition duration-300 w-xs">
            <div className="flex justify-between items-center">
                <div className="w-[70%]">
                    <h5>{product.name}</h5>
                </div>
                <div className="w-[30%] text-end">
                    <h6>{product.unit}{product.measure}</h6>
                </div>
            </div> 
            <div className="flex justify-between items-center">
                <div className="text-green-600 font-bold text-lg w-[50%]">₹{product.price}</div>
                <div className='w-[50%] text-end'>
                    <select id={`status${product._id}`} value={product.status}
                     onChange={(e)=>handleUpdateStatus(product._id, e.target.value)} 
                     className={`${product.status==="Available"?'text-[green]':'text-[red]'} w-auto text-center appearance-none rounded-lg border border-[#ccc] text-xs px-2`}>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Productcard