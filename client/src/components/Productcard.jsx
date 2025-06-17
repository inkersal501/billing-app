import React from 'react'

function Productcard({product}) {
    return (
        <div className="bg-white border border-[#ccc] shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300 w-xs">
            <div className="flex">
                <div className="w-[70%]">
                    <h5>{product.name}</h5>
                </div>
                <div className="w-[30%]">
                    <h6>{product.unit}{product.measure}</h6>
                </div>
            </div> 
            <div className="text-green-600 font-bold text-lg">₹{product.price}</div>
        </div>
    );
}

export default Productcard