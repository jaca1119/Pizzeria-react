import React from 'react';
import cart from '../img/cart.png';
import Popup from './Popup';


class Cart extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        isPopupShown: false,
        timeout: null
      };

      this.addToOrder = this.addToOrder.bind(this);
  }

  addToOrder() {
    this.props.addItem(this.props.standardPizza);

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