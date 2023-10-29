/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';
import axios from 'axios';

const Bookings = () => {
    const [booking,setBooking] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(()=>{
      axios(url,{withCredentials:true})
      .then(res => {
        setBooking(res.data)
      })
        // fetch(url)
        // .then(res=>res.json())
        // .then(data => {
        //     setBooking(data)
        // })
    },[url])
    const handleDelete = id =>{
    const proceed = confirm('are you sure you want to delete')
    if(proceed){
      fetch(`http://localhost:5000/booking/${id}`,{
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount>0){
          alert('successfully delete')
          const remaining = booking.filter(booked => booked._id !== id)
          setBooking(remaining) 
        }
      })
    }
  }
  const handleConfirm = id =>{
    fetch(`http://localhost:5000/booking/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status : 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0){
        const remaining = booking.filter(booked => booked._id !== id)
        const update = booking.find(booked => booked._id === id)
        update.status = 'confirm'
        const newBooking = [update, ...remaining]
        setBooking(newBooking)
      }
    })
  }
    return (
        <div>
            <h2>length: {booking.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        booking.map(booked =><BookingRow key={booked._id} booked ={booked} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow> )
      }
      
      
      
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;