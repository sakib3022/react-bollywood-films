import React from 'react';
import Filmcart from '../Filmcart/Filmcart';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let total = 0
    for (const film of cart) {
        total = total + film.Cost
    }
    return (
        <div>
            <h4 className='btn'>Movie Added:{props.cart.length}</h4>

            <h4 className='btn'>Total Cost:${total}</h4>

            {
                cart.map(filmcart => <Filmcart
                    key={filmcart.id}
                    filmcart={filmcart}
                ></Filmcart>)
            }

            <button className='btn-btn'>Buy now</button>
        </div>
    );
};

export default Cart;