import React, { Component } from 'react';
import Loader from './Loader';
import AllPizzas from './Pizzas/AllPizzas';

class Menu extends Component{

    render() {
        let pizzasContent;

        if (this.props.isStandardPizzasLoaded)
        {
            pizzasContent = <AllPizzas fetchedPizzas={this.props.fetchedStandardPizzas} />;
        }
        else
        {
            pizzasContent = <Loader />
        }

        return (
            <div className="menu">
                {pizzasContent}
            </div>
        );
    }
}

export default Menu;