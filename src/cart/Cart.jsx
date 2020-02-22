import React from 'react';
import cart from '../img/cart.png'


class Cart extends React.Component {
  
    render() {
        return (
            <div className="whole-cart">
                <img  src={cart} alt="shopping cart" />
                <div className="indicator">
                    <div className="add">+</div>
                </div>
            </div>
        );
    }
}

export default Cart;