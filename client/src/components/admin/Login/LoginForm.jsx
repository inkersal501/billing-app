import { useState, useEffect } from "react"; 
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; 
 
import { handleLogin } from "@adminjs/auth";
import { login } from "@store/adminSlice";

function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
        
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email === "") 
            toast.error("Email is empty.");
        else if(password === "") 
            toast.error("Password is empty.");
        else{
            const user = await handleLogin(email, password);
            if (user) {
                dispatch(login({ ...user }));
                navigate("/admin/dashboard");
            }
        }
    }   

    const formattedDate = currentTime.toLocaleDateString("en-IN");
    const formattedTime = currentTime.toLocaleTimeString("en-IN");
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="w-full flex justify-center">
                <div className="w-full max-w-md shadow-lg rounded-2xl border border-primary py-8 px-6 bg-white">
                    <h3 className="text-center text-xl font-semibold">Admin Login</h3> 
                    <p className="text-gray-600 text-center mb-6 text-sm">Sign in to manage billing, products, and users.</p>
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full flex flex-col gap-1 mb-4">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                id="email" 
                                className="input border px-3 py-2 rounded-md" 
                                onChange={(e)=>setEmail(e.target.value)} 
                                value={email}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1 mb-4">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="input border px-3 py-2 rounded-md" 
                                onChange={(e)=>setPassword(e.target.value)} 
                                value={password}
                            />
                        </div>
                        <div className="w-full text-right text-sm text-blue-600 mb-4">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div className="my-2 w-full">
                            <button 
                                type="submit" 
                                className="btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                            >
                                Submit
                            </button>
                        </div>
                    </div> 
                    <div className="text-center mt-4 text-sm text-gray-500">
                        <h5>{formattedDate} {formattedTime}</h5>
                    </div>             
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
