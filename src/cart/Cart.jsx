import React from 'react';
import cart from '../img/cart.png'


function Cart() {
    return (
        <div className="whole-cart">
            <img  src={cart} alt="shopping cart" />
            <div className="indicator">1</div>
        </div>
    );
}

export default Cart;