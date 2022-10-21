import React from 'react';
import { useNavigate } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, picture } = service;
    const navigate = useNavigate()
    const handleServiceBooking = (id) => {
        navigate(`/features/${id}`)
    }
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className='details'>
                <p>{name}</p>

            </div>
            <div>
                <button className='booking' onClick={() => handleServiceBooking(id)}>Booking..</button>
            </div>
        </div>
    );
};

export default Service;