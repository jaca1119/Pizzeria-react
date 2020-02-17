import React from 'react'

function OrderAccepted(props) {
    return (
        <div className="accepted">
            Order accepted with nr. {Math.floor(Math.random() * 100) + 10}
            <p>Your order will be ready in about: {Math.floor(Math.random() * 50 ) + 25} minutes.</p>
            Order details: {props.location.state.orderIngridients.map((ingridient, index) => <p key={index}>{ingridient.value} x {ingridient.name}</p>)}
        </div> );
}

export default OrderAccepted;