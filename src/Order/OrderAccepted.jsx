import React from 'react'
import CartOrder from '../cart/CartOrder';
import { Redirect } from 'react-router-dom';

function OrderAccepted(props) {

    const location = props.location; 

    if (location.state === undefined) {
        return <Redirect to="/" />;
    }

    const orderNumber = Math.floor(Math.random() * 100) + 10;
    const completeTimeMinutes = Math.floor(Math.random() * 50 ) + 25;

    let details = <CartOrder orderCart={location.state.orderCart} showDeleteButton={false} />

    

    return (
        <div className="accepted">
            Order accepted with nr {orderNumber}
            <p>Your order will be ready in about: {completeTimeMinutes} minutes.</p>
            Order details: {details}
        </div> );
}

export default OrderAccepted;