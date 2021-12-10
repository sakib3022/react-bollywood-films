import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Filmlist from '../Filmlist/Filmlist';
import './Movie.css'


const Movie = () => {
    const [films, setFilms] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('movies.json')
            .then(res => res.json())
            .then(data => setFilms(data))
    }, [])
    const handleAddToCart = (film) => {
        const newCart = [...cart, film]
        setCart(newCart)
    }
    return (
        <div className='movie-container'>
            <div className='filmlist-container'>
                {
                    films.map(film => <Filmlist
                        key={film.id}
                        film={film}
                        handleAddToCart={handleAddToCart}
                    ></Filmlist>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );

};

export default Movie;
