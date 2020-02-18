import React from 'react'
import { Redirect } from 'react-router-dom';
import Pizza from '../Pizzas/Pizza';

function OrderAccepted(props) {
    const orderNumber = Math.floor(Math.random() * 100) + 10;
    const completeTimeMinutes = Math.floor(Math.random() * 50 ) + 25;

    let details = null;

    const location = props.location; 

    if (location.state === undefined) {
        return <Redirect to="/" />;
    }

    if (location.state.standardOrder !== undefined) {
        details = <Pizza standardPizza={location.state.standardOrder} />;
    }
    else if (location.state.orderIngridients !== undefined) {
        details = location.state.orderIngridients.map((ingridient, index) => <p key={index}>{ingridient.value} x {ingridient.name}</p>);
    }

    return (
        <div className="accepted">
            Order accepted with nr {orderNumber}
            <p>Your order will be ready in about: {completeTimeMinutes} minutes.</p>
            Order details: {details}
        </div> );
}

export default OrderAccepted;