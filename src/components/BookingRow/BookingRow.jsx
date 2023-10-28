/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const BookingRow = ({booked}) => {
    const {img,CustomerName,date,service,price} = booked || {}
    return (
        <div>
            <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {
                    img && <img src={img} alt="Avatar Tailwind CSS Component" />
                }
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              
            </div>
          </div>
        </td>
        <td>
          {date}
          
        </td>
        <td>{price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;