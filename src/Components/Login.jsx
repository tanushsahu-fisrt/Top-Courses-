import React, { useState } from "react";

const Login = () => {

    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState('');


    const handleClick = () => {

    }
    
    return(
    <>

    <div
    className="items-center mx-auto"
    >   
    <div 
    className="flex-col"
    >


    <input 
    type="text" 
    placeholder="Enter User Name" 
    onChange={(e) => setUserName(e.target.value)} 
    className=" border-2 border-black"
    />
    <input 
    type="text" 
    placeholder="Enter Password"  
    onChange={(e) => setUserPassword(e.target.value)}
    className=" border-2 border-black"
    />

    <button type="button" 
    onClick={handleClick}
    >
    Submit 
    </button>
    </div>

    </div>

    </>
    )
}

export default Login;