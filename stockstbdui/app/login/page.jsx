/*
// This is the page for the login page, appears when clicking login on the top right of our website.
// Page will handle both logging in and sign up. Auth still needs to be done.
// --change colors to better correspond with rest of website
*/
'use client'
import React, {useState} from 'react';
import './login.css';

const LogIn = () => {
  //used to change states between login/signup
  const [action,setAction] = useState('Sign Up');

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        <div className="input">
        <input type="email" placeholder="example@this.com"/>
        </div>
        <div className="input">
        <input type="password" placeholder="********"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click here!</span></div>
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    
  );
};

export default LogIn;
