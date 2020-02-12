import React from 'react'

function OrderAccepted() {
    return ( <div className="accepted">Order accepted with nr. {Math.random().toPrecision(3) * 1000}</div> );
}

export default OrderAccepted;