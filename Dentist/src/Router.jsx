import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import { Home } from './layouts/home/Home';
import { Login } from './layouts/login/Login';
import { NewAppointment } from './layouts/newAppointment/NewAppointment';
import { Profile } from './layouts/profile/Profile';
import { Register } from './layouts/register/Register';
import { Treatments } from './layouts/treatments/Treatments';
import { UserAppointment } from './layouts/userAppointment/UserAppointment';
import { Users } from './layouts/users/Users';




export const Router = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/login' element={<Login/>} />;
        <Route path='/register' element={<Register/>} />;
        <Route path='/treatments' element={<Treatments/>} />;
        <Route path='/about' element={<About/>} />;
        <Route path='/profile' element={<Profile/>}/>;
        <Route path='/newappointment' element={<NewAppointment/>}/>;
        <Route path='/userappointment' element={<UserAppointment/>}/>;
        <Route path='/users' element={<Users/>}/>;
    </Routes>
    </>
  )
}
