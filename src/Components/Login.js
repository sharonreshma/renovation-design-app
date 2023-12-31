import React from 'react';
import { useState } from "react"
import '../Styles/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';


import { Button } from '@mui/material';
const Login=()=>{
    const [action,setAction]=useState("LOGIN");
    return(
        <div style={{ 
            backgroundImage: `url("./Assets/homedec.jpg")` 
          }}>
            <div className='wrap'>
        <div className='struct'>
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon' />
                </div>
                    
                <div className="input-box">
                    <input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                    <FaLock className='icon'/>
                </div>
               <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <div className="sub-cont">
                <Button><div className={action==="LOGIN"?"submit gray":"submit"} onClick={()=>{setAction("LOGIN")}}><Link to="/" >LOGIN</Link></div></Button>
                </div>
                <div className="reg-link">
                    <p>Don't have an account?
                    <Link to="/Signup">Sign Up?</Link></p>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};
export default Login;