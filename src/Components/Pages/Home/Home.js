import React from 'react';
import Machines from '../Machines/Machines';
import Servicess from '../Services/Servicess/Servicess';
import Slide from '../Slide/Slide';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='slide-container'>
                <Slide></Slide>
            </div>
             <div>
                <Servicess></Servicess>
            </div>
            <div>
                <Machines></Machines>
            </div>
           
        </div>
    );
};

export default Home;