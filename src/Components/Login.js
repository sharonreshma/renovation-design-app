import React from 'react';
import { useState } from "react"
import '../Styles/Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Login=()=>{
    const [action,setAction]=useState("Sign Up");
    return(
        <div className='struct'>
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon' />
                </div>
                    {action==="LOGIN"?<div></div>:<div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <IoIosMail className='icon' />
                </div>}
                <div className="input-box">
                    <input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                    <FaLock className='icon'/>
                </div>
                {action==="SIGN UP"?<div></div>:<div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>}
                <div className="sub-cont">
                <div className={action==="LOGIN"?"submit gray":"submit"} onClick={()=>{setAction("LOGIN")}}>LOGIN</div>
                <div className={action==="SIGN UP"?"submit gray":"submit"} onClick={()=>{setAction("SIGN UP")}}>SIGN UP</div>
                </div>
                <div className="reg-link">
                    <p>Don't have an account?
                    <a href="#"> Sign Up?</a></p>
                </div>
            </form>
        </div>
    );
};
export default Login;