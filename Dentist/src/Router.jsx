import React from 'react';
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
        <Route path='/' element={<Login/>} />
        <Route path='/' element={<Register/>} />
        <Route path='/' element={<Services/>} />
        <Route path='/' element={<About/>} />
    </Routes>
    </>
  )
}
