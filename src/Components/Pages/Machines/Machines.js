import React, { useEffect, useState } from 'react';
import Machine from './Machine/Machine';
import './Machines.css'

const Machines = () => {
    const [machines, setMachines] = useState([]);
    useEffect(() => {
        fetch('machines.json')
            .then(res => res.json())
            .then(data => setMachines(data))
    }, [])
    return (
        <div id='machine' className='container'>
            <h1>Our Test Machines</h1>
            <div className='machines'>

                {
                    machines.map(machine => <Machine
                        key={machine.id}
                        machine={machine}
                    ></Machine>)
                }
            </div>
        </div>
    );
};

export default Machines;