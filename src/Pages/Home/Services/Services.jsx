/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    // const servicesData = useLoaderData([])
    const [data ,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='mt-6'>
            <div>
                <h2 className='text-2xl font-semibold text-center text-orange-400'>Service</h2>
                <h2 className='text-4xl font-bold text-center'>Our Service Area</h2>
                <p className='text-center mt-3' >the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-8'>
            {
                data?.map(service => <ServiceCard key={service._id} service= {service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;