import React from 'react';
import cart from '../img/cart.png';
import Popup from './Popup';


class Cart extends React.Component {

    state = {
        isPopupShown: false,
        timeout: null
    };


  addToOrder = () => {
    const orderedStandardPizza = createOrderedStandardPizzaFrom(this.props.standardPizza, this.props.size);

    this.props.addItem(orderedStandardPizza);

    this.setState({isPopupShown: true});
    this.setState({timeout: setTimeout(() => {
            this.setState({isPopupShown: false});
        }, 1000)
    })
    
  }

  componentWillUnmount() {
      clearTimeout(this.state.timeout);
  }

    render() {
        return (
            <div className="whole-cart" onClick={this.addToOrder}>
                <img  src={cart} alt="shopping cart" />
                <div className="indicator">
                    <div className="add">+</div>
                </div>
                {this.state.isPopupShown && <Popup />}
            </div>
        );
    }
}

export default Cart;

function createOrderedStandardPizzaFrom(standardPizza, size)
{
    let pizza = {};
    pizza['size'] = size;
    pizza['standardPizza'] = standardPizza;

    let orderedStandardPizza = {};
    orderedStandardPizza['ordered_standard_pizza'] = pizza;
    
    return orderedStandardPizza;
}