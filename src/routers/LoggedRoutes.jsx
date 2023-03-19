import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import { routes } from '../config/constant';

function LoggedRoutes() {

    return (
        <Routes>
            <Route path={routes.home} exact element={<Home />} />
            <Route path={routes.payment} element={<Blog />} />
            <Route path={routes.register} element={<Profile />} />
            <Route path={routes.notFound} element={<NotFound />}></Route>
        </Routes>
    )

}


export default LoggedRoutes;