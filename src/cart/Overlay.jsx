import React from 'react';
import CartOrder from './CartOrder';
import { Redirect } from 'react-router-dom';


class Overlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderCart: {
                name: "asd",
                surname: "asddd",
                phone: "123",
                pizzas: this.props.items
        },
            redirect: null
        };

        this.sendOrder = this.sendOrder.bind(this);
    }

    

    sendOrder() {
        fetch("https://pizzeria-spring.herokuapp.com/order-pizza-cart", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.orderCart)
        })
        .then(response => {
            if (response.ok) {
                this.setState({redirect:  <Redirect to={{
                    pathname: "/orderAccepted",
                    state: {orderCart: this.state.orderCart}
                }} />});
                document.getElementById("overlay").click();
                this.props.clearItems();
            }
        });        
    }    
    
    render () {

        if (this.props.items.length === 0) {
            return <p>
                Empty order
            </p>;
        }
        return (
            <div id="overlay" className="overlay" onClick={this.props.showOrCloseOverlay}>
                {this.state.redirect}
                <div className="cart">
                    <CartOrder orderCart={this.state.orderCart} />
                    <div className="btn">
                        <button className="button" onClick={this.sendOrder}>Send order</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Overlay;