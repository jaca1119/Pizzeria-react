import React from 'react';
import cart from '../img/cart.png';
import Overlay from './Overlay';


class CartBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverlay: false,
            showEmpty: false
        };

        this.showOrCloseOverlay = this.showOrCloseOverlay.bind(this);
    }


    showOrCloseOverlay(event) {
        console.log(this.props.items);
        
        if (this.props.items.length !== 0) {
            if (event.target.classList.contains("cart-bar") || event.target.classList.contains("overlay"))
                this.setState({
                    showOverlay: !this.state.showOverlay,
                    showEmpty: false
                });
        }
        else {
            this.setState({showEmpty: !this.state.showEmpty});
        }
    }

    render() {
        
        return (
            <div className="cart-bar" onClick={this.showOrCloseOverlay}>
                Items in cart: {this.props.items.length}
                <div>
                    <img  src={cart} alt="shopping cart" />
                </div>
                    {this.state.showOverlay ? <Overlay items={this.props.items} showOrCloseOverlay={this.showOrCloseOverlay} clearItems={this.props.clearItems}/> : null}
                    {this.state.showEmpty && <p>Empty cart</p>}
            </div>
        );
    }
}

export default CartBar;