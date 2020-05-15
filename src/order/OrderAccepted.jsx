import React from 'react'
import CartOrder from '../cart/CartOrder';
import { Redirect, useLocation } from 'react-router-dom';
import './order.css';
import Payment from '../payment/Payment';
import { useState } from 'react';

function OrderAccepted() {
    const location = useLocation();
    const [status, setStatus] = useState("Waiting for payment");

    if (location.state === undefined) {
        return <Redirect to="/" />;
    }

    let details = <CartOrder orderCart={location.state.orderCart} showDeleteButton={false} />

    return (
        <div className="accepted">
            <h2>Order details:</h2>
            <p>Ordering person:</p>
            <p>Name: {location.state.orderCart.name}</p>
            <p>Surname: {location.state.orderCart.surname}</p>
            <p>Phone number: {location.state.orderCart.phone}</p>
            <h3>Ordered food:</h3>
            {details}
            <h3>Order status: {status} </h3>
            <Payment id={location.state.id} setStatus={setStatus} />
        </div>);
}

export default OrderAccepted;