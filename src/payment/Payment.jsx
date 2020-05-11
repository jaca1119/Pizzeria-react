import React from 'react';

class Payment extends React.Component {

    payClick = () => {
        let paymentWindow = window.open("https://affectionate-carson-6417c5.netlify.app/", "Payment");
        let timer = setInterval(() => {
            if (paymentWindow.closed) {
                clearInterval(timer);
                alert("Secure payment closed");
            }
        }, 500);
    }

    render() {
        return (
            <div>
                Payment works!
                <button onClick={this.payClick}>Pay</button>
            </div>
        )
    }
}

export default Payment;