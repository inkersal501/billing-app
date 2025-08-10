import React, {useEffect, useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "@store/authSlice";
import { FaCaretDown, FaUserCircle } from "react-icons/fa"; 

function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
    window.location.reload(); 
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
    <div className="bg-primary h-max-[10vh] flex justify-between items-center px-4 py-2">
      {user ? (
        <>           
          <div className="w-[50%] flex items-center gap-5">
            <h4 className="text-gray-800 bg-white px-4 rounded-md font-bold text-lg">
              {user.companyname || "BillingPro"}
            </h4>
            
          </div>
        
          <div className="w-[50%] flex gap-4 justify-end">
            <Link to="/bills/dashboard">
              <span
                className={`nav-link ${
                  location.pathname === "/bills/dashboard" ? "active" : ""
                }`}
              >
                Dashboard
              </span>
            </Link>
            <Link to="/bills/bills">
              <span
                className={`nav-link ${
                  location.pathname === "/bills/bills" ? "active" : ""
                }`}
              >
                Bills
              </span>
            </Link>
            <Link to="/bills/products">
              <span
                className={`nav-link ${
                  location.pathname === "/bills/products" ? "active" : ""
                }`}
              >
                Products
              </span>
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-white px-3 pb-1 hover:underline"
              >
               <FaUserCircle size={16}/> {user?.name} <FaCaretDown size={16} />
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
          </div>
        </>
      ) : (
       
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white font-bold text-lg m-0">BillingPro</h2>
          <p className="m-0"><small className="m-0">Manage your daily bills</small></p>          
        </div>
      )}
    </div>
  );
}

export default Navbar;
