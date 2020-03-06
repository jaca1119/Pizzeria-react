import React from 'react';
import Pizza from './Pizza';
import Cart from '../cart/Cart';
import Size from './Size';


class MenuPizza extends React.Component {

    render() {
        
        return (
            <div className="menu-pizza">
                
                <Pizza standardPizza={this.props.standardPizza} />
                <Size sizes={this.props.sizes} />
                <Cart addItem={this.props.addItem} standardPizza={this.props.standardPizza} />

            </div>
        );
    }
}

export default MenuPizza;