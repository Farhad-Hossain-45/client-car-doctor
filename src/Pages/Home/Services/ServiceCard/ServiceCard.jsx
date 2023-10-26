/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service || {};
  return (
    <div>
      <div className="card md:w-96 w-full bg-base-100 shadow-xl h-[320px]">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>price : ${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
