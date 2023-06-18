import React from 'react';
import { Outlet } from "react-router-dom";
import Login from '../pages/Login/Login';


const useAuth = () => {
    const user = localStorage.getItem("login");
    return user
}

function ProtectedRoutes() {
    const auth = useAuth();
    return auth ? <Outlet /> : <Login />
}

export default ProtectedRoutes