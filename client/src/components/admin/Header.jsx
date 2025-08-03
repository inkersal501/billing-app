import { logout } from "@store/adminSlice";
import React, {useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCaretDown, FaUserCircle } from "react-icons/fa"; 

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state)=> state.admin);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {  
    toast.success("Logged out successfully");    
    dispatch(logout());  
    navigate("/admin/");  
  };
   const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {admin.isLoggedin && admin.user.role === "Admin" && 
          <><NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Admin Users
          </NavLink>
          <NavLink
            to="/admin/billing-plans"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:border-b-2 hover:border-white pb-1"
            }
          >
            Billing Plans 
          </NavLink></>
          }
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-white px-3 pb-1 hover:underline"
              >
               <FaUserCircle size={16}/> {admin.user.name} <FaCaretDown size={16} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white text-black rounded shadow-lg z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
        </nav>
        :
        <nav className="flex gap-6">
            <NavLink
            to="/admin"            
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
