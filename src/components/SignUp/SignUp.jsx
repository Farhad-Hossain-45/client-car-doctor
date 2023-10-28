/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const name= e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error => {
          console.error(error)
        })

    }
    return (
        <div className='my-10'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left w-1/2">
      <h1 className="text-5xl font-bold mb-5">Sign Up</h1>
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-1/2">
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
          
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className='text-center my-2'>Already have an account? <Link className='text-orange-400 font-semibold underline' to='/login'> Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;