import React from 'react';
import Pizza from './Pizza';
import Cart from '../cart/Cart';


class MenuPizza extends React.Component {

    render() {
        
        return (
            <div className="menu-pizza">
                <Pizza standardPizza={this.props.standardPizza} />
                <div onClick={() => this.props.addItem(this.props.standardPizza)}>
                    <Cart />
                </div>
            </div>
        );
    }
}

export default MenuPizza;