import React from 'react';
import CartOrder from './CartOrder';


function Overlay(props) {

    if (props.items.length === 0) {
        return <p>
            Empty order
        </p>;
    }

    let orderCart = {
        name: "asd",
        surname: "asddd",
        phone: "123",
        pizzas: props.items
    }

    function sendOrder() {
        fetch("https://pizzeria-spring.herokuapp.com/order-pizza-cart", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderCart)
        })
        .then(response => {
            if (response.ok) {
                
            }
        });
    }

    

    return (
        <div id="overlay" className="overlay" onClick={props.showOrCloseOverlay}>
            <div className="cart">
                <CartOrder orderCart={orderCart} />
                <div className="btn">
                    <button className="button" onClick={sendOrder}>Send order</button>
                </div>
            </div>
        </div>
    );
}

export default Overlay;