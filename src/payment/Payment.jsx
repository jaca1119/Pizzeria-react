import React from 'react';
import './payment.css';
import PaymentPopup from './PaymentPopup';

const paymentURL = "https://affectionate-carson-6417c5.netlify.app";
// const paymentURL = "http://localhost:4200";


class Payment extends React.Component {
    state = {
        isPayClicked: false
    }
    showClosePopup = () => {
        this.setState({ isPayClicked: !this.state.isPayClicked });
    }

    render() {
        return (
            <div className="payment">
                Payment works!
                <button onClick={this.showClosePopup}>Go to payment</button>

                {this.state.isPayClicked &&
                    <PaymentPopup paymentURL={paymentURL} close={this.showClosePopup} />}

            </div>
        )
    }
}

export default Payment;