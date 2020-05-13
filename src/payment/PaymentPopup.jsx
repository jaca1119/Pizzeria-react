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
                <div className="content">

                    <button className="btn-close" onClick={this.props.close}>X</button>
                    {this.state.isOptionsVisible &&
                        <div>
                            <h4>Choose your payment option:</h4>
                            <hr />
                            <div className="options">
                                <div className="bank" onClick={this.optionClick}>
                                    <div>Avatar</div>
                                    <span>My bank</span>
                                </div>

                                <div className="bank">
                                    <div>Avatar</div>
                                    <span>Other bank</span>
                                </div>

                                <div className="bank">
                                    <div>Avatar</div>
                                    <span>Some bank</span>
                                </div>
                            </div>
                        </div>}

                    {this.state.isPaymentVisible &&
                        <iframe id="payment" src={this.props.paymentURL} title="Secure payment" width="100%" height="720px" />}

                </div>
            </div>
        )
    }
}

export default PaymentPopup;