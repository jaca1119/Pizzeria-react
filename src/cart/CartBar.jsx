import React from 'react';
import cart from '../img/cart.png';
import Overlay from './Overlay';


class CartBar extends React.Component {
        state = {
            showOverlay: false,
            showEmpty: false
        };

    showOrCloseOverlay = (event) => {     
           
        if (event.target.classList.contains("cart-bar") || event.target.classList.contains("overlay")) {
            this.setState({
                showOverlay: !this.state.showOverlay,
                showEmpty: false
            });
        }
    }

    render() {
        
        return (
            <div className="cart-bar" onClick={this.showOrCloseOverlay}>
                Items in cart: {this.props.items.length}
                <div>
                    <img  src={cart} alt="shopping cart" />
                </div>
                    {this.state.showOverlay ? 
                    <Overlay items={this.props.items} showOrCloseOverlay={this.showOrCloseOverlay} clearItems={this.props.clearItems} deleteItem={this.props.deleteItem}/> : null}
                    {this.state.showEmpty && <p>Empty cart</p>}
            </div>
        );
    }
}

export default CartBar;