import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faFilm } from '@fortawesome/free-solid-svg-icons'
import './Filmlist.css'
const Filmlist = (props) => {
    const { name, image, Production, Published, Distributor, Cost } = props.film
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const filmicon = <FontAwesomeIcon icon={faFilm} />
    return (
        <div className='movies-list'>
            <img src={image} alt="" />
            <h4>Name:{name}</h4>
            <h4>Production:{Production}</h4>
            <h4>Published Year:{Published}</h4>
            <h4>Distributor:{Distributor}</h4>
            <h4>Cost:${Cost}</h4>
            <button
                onClick={() => props.handleAddToCart(props.film)}
                className='btn-cart'>{element}AddToCart</button>
            <h2>{filmicon}</h2>
        </div >
    );
};

export default Filmlist;