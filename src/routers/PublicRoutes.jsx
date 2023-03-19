import React from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from '../config/constant'

export const PublicRoutes = ({ children }) => {

    const auth = localStorage.getItem('token');

    return auth !== ''  ?
        <Navigate to={routes.home} />
        : children

}