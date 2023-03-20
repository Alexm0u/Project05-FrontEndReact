import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import { Home } from './layouts/home/Home';
import { Login } from './layouts/login/Login';
import { Profile } from './layouts/profile/Profile';
import { Register } from './layouts/register/Register';
import { Services } from './layouts/services/Services';


export const Router = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/login' element={<Login/>} />;
        <Route path='/register' element={<Register/>} />;
        <Route path='/services' element={<Services/>} />;
        <Route path='/about' element={<About/>} />;
        <Route path='/profile' element={<Profile/>}/>;
    </Routes>
    </>
  )
}
