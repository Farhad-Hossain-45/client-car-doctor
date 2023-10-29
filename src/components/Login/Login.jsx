/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  // console.log(location)
  const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        signIn(email,password)
        .then(result => {
          
          console.log(result.user)
          const user = {email}
          
          axios.post('http://localhost:5000/jwt',user,{
            withCredentials: true
          })
          .then(res => {
            console.log(res.data)
            if(res.data.success){
              navigate(location?.state ? location.state : '/')
            }
            
          })
        })
        .catch(error => console.error(error))

    }
    return (
        <div className='my-10'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
      <h1 className="text-5xl font-bold mb-5">Login now!</h1>
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center my-2'>New To Car Doctors: <Link className='text-orange-400 font-semibold underline' to='/signup'> Sing Up</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;