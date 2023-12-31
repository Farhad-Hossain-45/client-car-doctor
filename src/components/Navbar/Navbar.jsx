/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import { AuthContext } from '../Provider/AuthProvider';
import auth from '../../../Firebase/Firebase.config';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut(auth)
    .then(()=>{})
    .catch((error)=>{
      console.error(error)
    })

    
  }
    const navLinks = <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/about">About</NavLink></li>
     <li><NavLink to="/service">Services</NavLink></li>
     {
        user?.email ? <>
        <li><NavLink to="/booked">My Booking</NavLink></li>
        <button onClick={handleLogOut}>Log Out</button>
        </>:
        
     
     <li><NavLink to="/login">login</NavLink></li>
     }
        
       

    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-3" >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case"><img src={logo} alt="logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appointment</button>
  </div>
</div>
    );
};

export default Navbar;