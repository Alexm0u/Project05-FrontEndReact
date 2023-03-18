import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import { Home } from './layouts/home/Home';
import { Login } from './layouts/login/Login';
import { Register } from './layouts/register/Register';
import { Services } from './layouts/services/Services';


export const Router = () => {
  return (
    <>
    <hr />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </>
  )
}
