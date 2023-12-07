import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profiles from './Components/Profiles/Profiles';
import MyProfile from './Components/MyProfile/MyProfile';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const[Profile,setProfile]=useState()
  useEffect(() => {
    getProfile();
  },[localStorage]);

  const getProfile = async () => {
    const userId = localStorage.getItem("userId");
    let resp = await fetch(`http://localhost:5002/Profile/me/${userId}`);
    let result = await resp.json();
    setProfile(result);
  };
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Profiles' element={<Profiles/>}/>
      <Route path='/me' element={<MyProfile src={Profile} />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
