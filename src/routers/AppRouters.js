import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { loginEmailyPassAsync } from '../Redux/actions/actionLogin';
import DashboardRouters from './DashboardRouters';
import { PublicRouters } from './PublicRouters';


const AppRouters = () => {
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user)
                dispatch(loginEmailyPassAsync(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [ dispatch])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <BrowserRouter>
     
     <Routes>
                <Route path="/login" element={
                <PublicRouters isAuthenticated ={isLoggedIn}>
                             <Login/>
                </PublicRouters>} />

                <Route path="/register" element={
                <PublicRouters isAuthenticated ={isLoggedIn}>
                        <Register/>
                </PublicRouters>} />

                <Route path="/*" element={<PublicRouters>
                    <DashboardRouters isAuthenticated ={isLoggedIn}/>
                </PublicRouters>}/>
             
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;