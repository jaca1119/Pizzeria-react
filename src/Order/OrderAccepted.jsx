import React from 'react'
import CartOrder from '../cart/CartOrder';
import { Redirect, useLocation } from 'react-router-dom';
import './order.css';
import Payment from '../payment/Payment';

function OrderAccepted() {

    const location = useLocation();

    if (location.state === undefined) {
        return <Redirect to="/" />;
    }

    let details = <CartOrder orderCart={location.state.orderCart} showDeleteButton={false} />

    return (
        <div className="accepted">
            Order details: {details}
            <Payment />
        </div>);
}

export default OrderAccepted;