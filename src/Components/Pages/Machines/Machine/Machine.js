import React from 'react';
import './Machine.css'

const Machine = ({machine}) => {
const {id, name, picture,title, phone}=machine;
    return (
        <div className='machine'>
            
            <img className='picture' src={picture} alt="" />
           <div className='details'>
           <p>Name:{name}</p>
            {title}
           </div>

        </div>
    );
};

export default Machine;