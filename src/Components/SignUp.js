import React from 'react';
import { useState } from "react"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import '../Assets/homedec.jpg';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Login=()=>{
    const [action,setAction]=useState("Sign Up");
    return(
        <div>
        <div className='struct'>
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon' />
                </div>
                    <div className="input-box">
                    <input type="text" placeholder='Email' required/>
                    <IoIosMail className='icon' />
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
                <Button><div className={action==="SIGN UP"?"submit gray":"submit"} onClick={()=>{setAction("SIGN UP")}}><Link to="/">SIGN UP</Link></div></Button>
                </div>
                <div className="reg-link">
                    <p>Already have an account?
                    <Link to="/login"> Login?</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};
export default Login;