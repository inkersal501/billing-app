import { useState, useEffect } from "react";
import Logo from '../components/Logo'

function Landing() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); 
    }, []);
    
    const formattedDate = currentTime.toLocaleDateString("en-IN");
    const formattedTime = currentTime.toLocaleTimeString("en-IN");

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen bg-white gap-0"> 
                <h1 className="m-0">Welcome to</h1>
                <div className="w-[60%] flex justify-center">
                    <Logo width="50%"/>
                </div>
                <div className="text-center">
                    <h1>{formattedDate}</h1>
                    <h3>{formattedTime}</h3>
                </div> 
            </div>
        </div>
    )
}

export default Landing