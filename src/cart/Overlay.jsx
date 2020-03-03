import React from 'react';
import CartOrder from './CartOrder';
import { Redirect } from 'react-router-dom';
import OrderInput from '../Order/OrderInput';


class Overlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderCart: {
                name: "",
                surname: "",
                phone: "",
                pizzas: []
        },
            redirect: null
        };

        this.sendOrder = this.sendOrder.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
    }

    

    sendOrder() {
        console.log(this.state.orderCart);
        
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

    updateOrder(inputValues) {
        this.setState({orderCart: {
            name: inputValues.name,
            surname: inputValues.surname,
            phone: inputValues.phone,
            pizzas: this.props.items
        }});
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
                    <OrderInput updateOrder={this.updateOrder}/>
                        <button className="button" onClick={this.sendOrder}>Send order</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Overlay;