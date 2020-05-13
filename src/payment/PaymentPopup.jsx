import React from 'react';

class PaymentPopup extends React.Component {

    state = {
        isOptionsVisible: true,
        isPaymentVisible: false
    }

    optionClick = () => {
        this.setState({
            isOptionsVisible: false,
            isPaymentVisible: true
        }, () => {
            const payment = document.getElementById("payment").contentWindow;
            payment.postMessage({
                from: 'pizzeria',
                amount: sessionStorage.getItem("amount"),
                message: 'order id: 66'
            }, this.props.paymentURL);
        });
    }

    render() {
        return (
            <div className="payment-popup">
                <button className="btn-close" onClick={this.props.close}>X</button>
                {this.state.isOptionsVisible &&
                    <div>
                        Choose your payment option:
                        <button className="bank-avatar" onClick={this.optionClick}>
                            <p>Avatar</p>
                            <span>My bank</span>
                        </button>
                    </div>}

                {this.state.isPaymentVisible &&
                    <iframe id="payment" src={this.props.paymentURL} title="Secure payment" width="720px" height="720px" />}

            </div>
        )
    }
}

export default PaymentPopup;