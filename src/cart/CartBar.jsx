import React from 'react';

class CartBar extends React.Component {

    render() {
        
        return (
            <div className="cart-bar">
                Items in cart: {this.props.items.length}
            </div>
        );
    }
}

export default CartBar;