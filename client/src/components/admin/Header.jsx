import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const admin = useSelector((state)=> state.admin);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <header className="w-full bg-primary text-white shadow mb-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
       
        <h1 className="text-xl font-bold tracking-wide">BillingPro</h1>
        {admin.isLoggedin ?   
        <nav className="flex gap-6">
          
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Customers
          </NavLink>         
          
          <NavLink
            to="/admin/profile"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/admin/view-admin-users"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Admin Users
          </NavLink>
          <button
            onClick={handleLogout}
            className="text-white px-3 pb-1"
          >
            Logout
          </button>
        </nav>
        :
        <nav className="flex gap-6">
            <NavLink
            to="/admin/"
            className={"hover:border-b-2 hover:border-white pb-1"}
          >
            Login
          </NavLink>
        </nav>
        }
      </div>
    </header>
  );
}

export default Header;
