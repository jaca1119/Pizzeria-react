import React from 'react'
import CartOrder from '../cart/CartOrder';
import { Redirect, useLocation } from 'react-router-dom';
import './order.css';

function OrderAccepted() {

    const location = useLocation();

    if (location.state === undefined) {
        return <Redirect to="/" />;
    }

    let details = <CartOrder orderCart={location.state.orderCart} showDeleteButton={false} />

    return (
        <div className="accepted">
            Order details: {details}
            Go to payment: <button onClick={payClick}>Payment</button>
        </div>);
}

function payClick() {
    let from = "pizzeria";
    let amount = sessionStorage.getItem("amount");
    let message = "order_ID";

    let paymentWindow = window.open(`https://affectionate-carson-6417c5.netlify.app/?from=${from}&amount=${amount}&message=${message}`, "Payment");

    let timer = setInterval(() => {
        if (paymentWindow.closed) {
            clearInterval(timer);
            alert("Secure payment closed");
        }
    }, 500);
}

export default OrderAccepted;