import React from 'react';
import bankLogo from '../img/bank-logo.png';

function PaymentOptions(props) {
    return (
        <div>
            <h4>Choose your payment option:</h4>
            <hr />
            <div className="options">
                <div className="bank" onClick={props.optionClick}>
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
        </div>
    );
}

export default PaymentOptions;