import React from 'react';
import { useParams } from 'react-router';

const Features = () => {
    const {servicesId}=useParams();
    return (
        <div>
            <h1>welcome to Features!!:{servicesId}</h1>
        </div>
    );
};

export default Features;