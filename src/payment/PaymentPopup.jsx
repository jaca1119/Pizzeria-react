import React from 'react';
import bankLogo from '../img/bank-logo.png';

class PaymentPopup extends React.Component {

    state = {
        isOptionsVisible: true,
        isPaymentVisible: false
    }

    componentDidMount() {
        window.addEventListener('message', this.handlePaymentEvent);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.handlePaymentEvent);
    }

    handlePaymentEvent = (e) => {
        if (e.origin !== this.props.paymentURL) {
            return;
        }

        this.setState({
            isPaymentVisible: false,
            isOptionsVisible: true
        });

        if (e.data === "success") {
            fetch(`https://pizzeria-spring.herokuapp.com/order-pizza-cart/payment/${this.props.id}`, {
                method: "PATCH"
            })
                .then(response => {
                    if (response.ok) {
                        this.props.setStatus("Payment accepted!");
                    }
                });
        }
    }

    optionClick = () => {
        this.setState({
            isOptionsVisible: false,
            isPaymentVisible: true
        });
    }

    sendMessage = () => {
        const payment = document.getElementById("payment").contentWindow;

        payment.postMessage({
            from: 'pizzeria',
            amount: sessionStorage.getItem("amount"),
            message: 'order id: 66',
            parentURL: window.origin
        }, this.props.paymentURL);
    }

    checkStatus = () => {
        console.warn(this.props.setStatus);

    }

    render() {
        return (
            <div className="payment-popup">
                <div className="content">
                    <button onClick={this.checkStatus}>Change status</button>

                    <button className="btn-close" onClick={this.props.close}>X</button>
                    {this.state.isOptionsVisible &&
                        <div>
                            <h4>Choose your payment option:</h4>
                            <hr />
                            <div className="options">
                                <div className="bank" onClick={this.optionClick}>
                                    <img src={bankLogo} className="bank-logo" alt="my-bank" />
                                    <div>My bank</div>
                                </div>

                                <div className="bank disabled">
                                    <div>Avatar</div>
                                    <span>Other bank</span>
                                </div>

                                <div className="bank disabled">
                                    <div>Avatar</div>
                                    <span>Some bank</span>
                                </div>
                            </div>
                        </div>}

                    {this.state.isPaymentVisible &&
                        <iframe id="payment" onLoad={this.sendMessage} src={this.props.paymentURL} title="Secure payment" width="100%" height="720px" />}

                </div>
            </div>
        )
    }
}

export default PaymentPopup;