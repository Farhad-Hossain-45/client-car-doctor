/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
    }
    return (
        <div>
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
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;