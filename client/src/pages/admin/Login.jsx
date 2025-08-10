import LoginForm from "@admincomponents/Login/LoginForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

  const admin = useSelector((state) => state.admin.user);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(admin?.token){
      navigate("/admin/dashboard");
    }
    //eslint-disable-next-line
  }, [admin]);

  return (
    <LoginForm />      
  );
}

export default Login;
