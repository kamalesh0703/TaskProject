import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleRegister=async(e)=>{
    e.preventDefault();
    let headers = {
      method: "POST",
      body: JSON.stringify({Email:Email,Password:Password}),
      headers: {
        "content-type": "application/json",
      },
    };
    let resp = await fetch("http://localhost:5002/Profile/login", headers);
    let result = await resp.json();
    if(result.Status=== "200"){
      localStorage.setItem('islogin',true)
      console.log(result)
      localStorage.setItem("userId",result.profile._id)
      navigate('/')
      alert(result.Message)
      window.location.reload(true)
    }
    else{
      alert(result.Message)
    }
  }
  return (
    <div className='login-container'>
      <div className='login-form'>
        <h1>Login</h1>
        <input type="text" className='login-inputs' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="text"  className='login-inputs' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button className='login-btn' onClick={handleRegister}>Login</button>
        <div className="bottom-content">
          <p className='fgt-password'>Forget Password?</p>
          <Link to='/register' >Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login