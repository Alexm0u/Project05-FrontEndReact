import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import { Home } from './layouts/home/Home';
import { Login } from './layouts/login/Login';
import { NewAppointment } from './layouts/newAppointment/NewAppointment';
import { Profile } from './layouts/profile/Profile';
import { Register } from './layouts/register/Register';
import { Treatments } from './layouts/treatments/Treatments';
import { CatchAppointmentAsUser } from './layouts/userAppointment/UserAppointment';
import { GetAllUsers } from './layouts/getUsersAsAdmin/GetUsers';
import { UserDetails } from './layouts/getUsersAsAdmin/UserDetail/GetUsersDetail';





export const Router = () => {
  return (
    <>
    
    <Routes>
        <Route path='/' element={<Home/>} />;
        <Route path='/login' element={<Login/>} />;
        <Route path='/register' element={<Register/>} />;
        <Route path='/treatments' element={<Treatments/>} />;
        <Route path='/about' element={<About/>} />;
        <Route path='/user/profile' element={<Profile/>}/>;
        <Route path='/newappointment' element={<NewAppointment/>}/>;
        <Route path='/appointment/myappointment' element={<CatchAppointmentAsUser/>}/>;
        <Route path='/user/all' element={<GetAllUsers />} />
        <Route path='/user/all/details' element={<UserDetails />} />
    </Routes>
    </>
  )
}
