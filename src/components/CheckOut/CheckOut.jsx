/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    console.log(service)
    const {_id,title,price,img} = service || {}
    const {user}= useContext(AuthContext)

    const handleBooking = e =>{
      e.preventDefault()
      const name = e.target.name.value;
      const date = e.target.date.value;
      const email = e.target.email.value;
      const phone =e.target.phone.value;
      const price = e.target.price.value;
      // console.log(name,date,email,phone,message)

      const booking = {
        CustomerName : name,
        date,
        email,
        img,
        phone : phone,
        service : title,
        service_id :_id,
        price: price


      }
      console.log(booking)

      fetch('http://localhost:5000/booking',{
        method: "POST",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('added successfully')
        }
          
      })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleBooking}>
        <div className='grid grid-cols-2 gap-5'>
        <div className="form-control">
          
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="date" name='date' placeholder="date" className="input input-bordered" required />
          
        </div>
       
        <div className="form-control">
         
          <input type="text" name='phone' placeholder="your phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="email" defaultValue={user?.email} name='email' placeholder="your email" className="input input-bordered" required />
          
        </div>
        
        </div>
        <div className="form-control">
          
          <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered" required />
          
        </div>
        <input className='btn bg-orange-500 text-white' type="submit" value="Order Confirm" />
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default CheckOut;