import React from 'react'
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    return (
        <header className="flex items-center justify-between flex-wrap px-8 py-2 shadow-md bg-white relative">
            <h2 className="text-2xl font-bold text-green-600">BillingPro</h2>
            <nav className="space-x-6 flex items-center justify-center ">
                <a href="#features" className="hover:text-green-600">Features</a>
                <a href="#pricing" className="hover:text-green-600">Pricing</a>
                <a href="#contact" className="hover:text-green-600">Contact</a>

                <button onClick={()=>navigate("/bills")} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Login
                </button>

            </nav>
        </header>
    )
}

export default Header