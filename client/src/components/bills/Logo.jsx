import logo from "@assets/logo.png";
import logo2 from "@assets/logo.jpg";
import { Link } from "react-router-dom";
function Logo({width="100%", src="logo2"}) { 
  return (    
    // <Link to=""   
    <img src={src=="logo2"?logo2:logo} alt="Coffee Point" className={`w-[${width}]`} /> 
  );
}

export default Logo;
