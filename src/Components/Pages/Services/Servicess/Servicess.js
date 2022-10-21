import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import './Servicess.css'

const Servicess = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='service' className='container'>
            <h1>Our Services</h1>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Servicess;