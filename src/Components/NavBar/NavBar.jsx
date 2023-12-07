import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'
import Login from '../Login/Login';

function NavBar() {
    const [islogin,setLogin]=useState(false);

    useEffect(()=>{
        if(localStorage.getItem("islogin")){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    })
    const logout=()=>{
        localStorage.removeItem('islogin')
        window.location.reload(true)
    }
  return (
   <div className='nav-container'>
    <div>Logo.</div>
    <ul className='nav-lists'>
        <li className='nav-link'>
            <Link to='/'>Home</Link>
        </li>
        <li className='nav-link' >
            <Link to='/profiles'>See Profiles</Link>
        </li>
        {islogin ?
        <li className='nav-link' >
            <Link to='/me'>My Profile</Link>
        </li> :
        <li className='nav-link' >
            <Link to='/login'>Login</Link>
        </li>
        }
        {islogin?<li className='nav-link' >
            <Link onClick={logout}>Logout</Link>
        </li>:
        <li className='nav-link' >
            <Link to='/register'>Register</Link>
        </li>}
    </ul>
   </div>
  )
}

export default NavBar