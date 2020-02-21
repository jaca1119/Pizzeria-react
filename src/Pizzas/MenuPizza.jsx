import React from 'react';
import Pizza from './Pizza';
import {  Link } from 'react-router-dom';
import Cart from '../cart/Cart';


class MenuPizza extends React.Component {

    render() {

        return (
            <div className="menu-pizza">
                <Pizza standardPizza={this.props.standardPizza} />

                <Link to={{
                    pathname: "/order",
                    state: {standardOrder: this.props.standardPizza}
                }}>
                    <Cart />
                </Link>
                
            </div>
        );
    }
}

export default MenuPizza;