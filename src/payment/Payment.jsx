import React from 'react';
import './payment.css';

// const paymentURL = "https://affectionate-carson-6417c5.netlify.app";
const paymentURL = "http://localhost:4200";


class Payment extends React.Component {
    state = {
        isPayClicked: false
    }
    payClick = () => {
        this.setState({ isPayClicked: !this.state.isPayClicked });
        // let paymentWindow = window.open("https://affectionate-carson-6417c5.netlify.app/", "Payment");
        // let timer = setInterval(() => {
        //     if (paymentWindow.closed) {
        //         clearInterval(timer);
        //         alert("Secure payment closed");
        //     }
        // }, 500);
    }

    sendData = () => {
        const payment = document.getElementById("payment").contentWindow;
        payment.postMessage("Hello there!", paymentURL);

    }

    render() {
        return (
            <div className="payment">
                Payment works!
                <button onClick={this.sendData}>Send data</button>
                <button onClick={this.payClick}>Pay</button>
                {this.state.isPayClicked &&
                    <iframe id="payment" src={paymentURL} title="Secure payment" width="720px" height="720px" />}
            </div>
        )
    }
}

export default Payment;