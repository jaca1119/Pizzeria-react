import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component{

    render() {
        return (
            <nav>
                <NavLink to="/menu" className="link" activeClassName="nav-active">Menu</NavLink>
                <NavLink to="/compose" className="link" activeClassName="nav-active">Compose</NavLink>
            </nav>
        );
    }
}

export default Navbar;