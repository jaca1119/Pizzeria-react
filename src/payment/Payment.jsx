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

                <button className="button" onClick={this.showClosePopup}>Go to payment</button>

                {this.state.isPayClicked &&
                    <PaymentPopup paymentURL={paymentURL} close={this.showClosePopup} id={this.props.id} setStatus={this.props.setStatus} />}

            </div>
        )
    }
}

export default Payment;