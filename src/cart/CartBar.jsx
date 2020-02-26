import React from 'react';
import cart from '../img/cart.png';
import Overlay from './Overlay';


class CartBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverlay: false
        };

        this.showOrCloseOverlay = this.showOrCloseOverlay.bind(this);
    }


    showOrCloseOverlay(event) {        
        if (event.target.classList.contains("cart-bar") || event.target.classList.contains("overlay"))
            this.setState({showOverlay: !this.state.showOverlay});
    }

    render() {
        
        return (
            <div className="cart-bar" onClick={this.showOrCloseOverlay}>
                Items in cart: {this.props.items.length}
                <div>
                    <img  src={cart} alt="shopping cart" />
                </div>
                    {this.state.showOverlay ? <Overlay items={this.props.items} showOrCloseOverlay={this.showOrCloseOverlay} clearItems={this.props.clearItems}/> : null}
            </div>
        );
    }
}

export default CartBar;