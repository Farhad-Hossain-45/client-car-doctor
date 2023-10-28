/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../Layout/Layout';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Home/Services/Services';
import Login from '../components/Login/Login';

import SignUp from '../components/SignUp/SignUp';
import CheckOut from '../components/CheckOut/CheckOut';
import Bookings from '../components/Bookings/Bookings';
import PrivetRoute from '../components/PrivetRoute/PrivetRoute';


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
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/booking/:id',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booked',
                element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
            }

        ]
    }
])

export default Router;