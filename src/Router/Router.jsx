/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';


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
            }

        ]
    }
])

export default Router;