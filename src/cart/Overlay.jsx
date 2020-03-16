import React from 'react';
import CartOrder from './CartOrder';
import { Redirect } from 'react-router-dom';
import OrderInput from '../Order/OrderInput';


class Overlay extends React.Component {
    state = {
        orderCart: {
            name: "",
            surname: "",
            phone: "",
            pizzas: []
        },
        redirect: null
    };

    componentDidMount() {
        this.setState(prevState => {
            let orderCart = {...prevState.orderCart};
            orderCart.pizzas = this.props.items;
            
            return {orderCart};
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(this.props.items) !== JSON.stringify(prevProps.items)) {
            this.setState(prevState => {
                let orderCart = {...prevState.orderCart};
                orderCart.pizzas = this.props.items;
                
                return {orderCart};
            })
        }
    }

    isOrderEmpty = () => {
        return this.state.orderCart.pizzas.length === 0 ? true : false;
    }

    sendOrder = () => {    
        
        if(!this.isOrderEmpty()) {
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
    }   

    updateOrder = (inputValues) => {
        this.setState({
            orderCart: {
                name: inputValues.name,
                surname: inputValues.surname,
                phone: inputValues.phone,
                pizzas: this.props.items
            }
        });
    }
    
    render () {  
        return (
            <div id="overlay" className="overlay" onClick={this.props.showOrCloseOverlay}>
                {this.state.redirect}
                <div className="cart">
                    <CartOrder orderCart={this.state.orderCart} deleteItem={this.props.deleteItem} showDeleteButton={true}/>
                    
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