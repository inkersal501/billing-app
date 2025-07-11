import { useState, useEffect } from "react";
import Logo from "../../components/bills/Logo";
import { toast } from "react-toastify";
import { handleLogin } from "../../js/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useNavigate } from 'react-router-dom'; 

function Login() {

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
        navigate("/bills/dashboard");
      }
    }
  }   

  const formattedDate = currentTime.toLocaleDateString("en-IN");
  const formattedTime = currentTime.toLocaleTimeString("en-IN");

  return (
    <div className="bg-white flex flex-wrap items-start h-screen p-0 m-0">
      <div className="w-[100%] bg-primary px-4 py-2 mb-15">
        <h1>Daily Bills</h1>
      </div>
      <div className="w-[40%] h-full p-4">
        <Logo width="100%"/>
        <div className="text-center">
          <h2>{formattedDate}</h2>
          <h5>{formattedTime}</h5>
        </div>
      </div>
      <div className="w-[60%]">
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="w-[50%] shadow-lg rounded-2xl border-primary py-5">
                <h3 className="text-center my-4">Login</h3>
                <p className="text-center my-4">Login to billing..</p>
                <div className="w-[100%] flex flex-col items-center">
                    <div className="w-[80%] flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="input" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>
                    <div className="w-[80%] flex flex-col gap-1 my-4">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="input" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="w-[80%] text-end">
                      <a href="#">Forgot Password?</a>
                    </div>
                    <div className="my-4">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </div>              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
