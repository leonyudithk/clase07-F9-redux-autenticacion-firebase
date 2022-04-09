import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddPlanta from '../components/AddPlanta';
import Home from '../components/Home';
import ListPlantas from '../components/ListPlantas';
import NavBars from '../components/NavBars';

const DashboardRouters = () => {
    return (
        <div>
            <>
            <NavBars/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/add" element={<AddPlanta/>} />
                <Route path="/listar" element={<ListPlantas/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
        </div>
    );
};

export default DashboardRouters;