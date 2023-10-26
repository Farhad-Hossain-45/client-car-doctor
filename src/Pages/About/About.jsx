/* eslint-disable no-unused-vars */
import React from "react";
import photo1 from '../../assets/images/about_us/person.jpg'
import photo2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 relative">
          <img
            src={photo1}
            className="max-w-sm rounded-lg shadow-2xl w-3/4"
          />
          <img
            src={photo2}
            className="max-w-sm rounded-lg shadow-2xl absolute right-6 -bottom-12 border-8 border-white w-1/2"
          />
          </div>
          <div className="w-1/2">
            <h1 className="text-orange-500 font-semibold">About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p className="py-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
