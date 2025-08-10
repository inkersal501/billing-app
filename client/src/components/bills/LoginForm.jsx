import { handleLogin } from "@js/bills/auth";
import { login } from "@store/authSlice";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLocalSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Email is empty.");
    if (!password.trim()) return toast.error("Password is empty.");
    const user = await handleLogin(email, password);
    if (user) {
      dispatch(login({ ...user }));
      navigate("/bills/dashboard");
    }
  };  
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Format date & time
  const formattedDateTime =
    `${currentTime.getDate().toString().padStart(2, "0")}-` +
    `${currentTime.toLocaleString("en-IN", { month: "short" })}-` +
    `${currentTime.getFullYear()} ` +
    `${currentTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).toLowerCase()}`;

  return (
    <form onSubmit={handleLocalSubmit}>
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-white p-4">
          {/* Heading */} 
          <h5 className="text-sm text-center text-gray-800 mb-6">
            Login to Daily Bills
          </h5>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Forgot password */}
          <div className="flex justify-end mb-6">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Login
          </button>
          <div className="text-center mt-4 text-sm text-gray-500">
            {formattedDateTime}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
