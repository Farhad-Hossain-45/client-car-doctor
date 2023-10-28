/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import BookingRow from '../BookingRow/BookingRow';

const Bookings = () => {
    const [booking,setBooking] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            setBooking(data)
        })
    },[url])
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
        booking.map(booked =><BookingRow key={booked._id} booked ={booked}></BookingRow> )
      }
      
      
      
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;