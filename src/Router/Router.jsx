/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Home/Services/Services';
import Login from '../components/Login/Login';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/service',
                element: <Services></Services>,
                // loader: ()=>fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
])

export default Router;