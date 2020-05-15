import React from 'react';
import PaymentOptions from './PaymentOptions';

class PaymentPopup extends React.Component {

    state = {
        isOptionsVisible: true,
        isPaymentVisible: false,
        isSuccess: false
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

            this.setState({ isSuccess: true });
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
            message: `order id: ${this.props.id}`,
            parentURL: window.origin
        }, this.props.paymentURL);
    }

    render() {
        return (
            <div className="payment-popup">
                <div className="content">
                    <button className="btn-close" onClick={this.props.close}>X</button>
                    {this.state.isOptionsVisible && <PaymentOptions optionClick={this.optionClick} />}

                    {this.state.isSuccess &&
                        <div>
                            <p>SUCCESS!</p>
                            Your order should be prepared to one hour
                            <p>(you can close this window now)</p>
                        </div>}

                    {this.state.isPaymentVisible &&
                        <iframe id="payment" onLoad={this.sendMessage} src={this.props.paymentURL} title="Secure payment" width="100%" height="720px" />}

                </div>
            </div>
        )
    }
}

export default PaymentPopup;