import {useContext} from 'react'
import { context } from '../Context/AuthContext'
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({component:Component,...rest}) => {
    const {user}=useContext(context);
    return user? <Outlet /> : <Navigate to="/Login" />;
}
export default PrivateRoute