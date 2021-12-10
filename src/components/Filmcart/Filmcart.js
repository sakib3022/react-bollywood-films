import React from 'react';
import './Filmcart.css'

const Filmcart = (props) => {
    const { name, image } = props.filmcart
    return (
        <div className='display'>
            <img className='img' src={image} alt="" />
            <h4 className='img'>{name}</h4>
        </div>


    );
};

export default Filmcart;