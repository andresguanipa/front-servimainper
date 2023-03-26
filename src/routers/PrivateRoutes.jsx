import React from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../config/constant'

export const PrivateRoutes = ({ children }) => {

    const auth = localStorage.getItem('token');

    return auth !== '' ?
        children
        : <Navigate to={routes.login} replace={true} />

}