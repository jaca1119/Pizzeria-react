import React from 'react';
import Pizza from './Pizza';
import {  Link } from 'react-router-dom';


class MenuPizza extends React.Component {

    render() {

        return (
            <div className="menu-pizza">
                <Pizza standardPizza={this.props.standardPizza} />

                <Link to={{
                    pathname: "/order",
                    state: {standardOrder: this.props.standardPizza}
                }}>
                    <button className="menu-button">Order this pizza!</button>
                </Link>
            </div>
        );
    }
}

export default MenuPizza;