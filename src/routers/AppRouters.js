import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBars from '../components/NavBars';
import Register from '../components/Register';


const AppRouters = () => {
    return (
        <BrowserRouter>
        <NavBars/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;