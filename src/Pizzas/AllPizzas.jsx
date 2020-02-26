import React from 'react';
import MenuPizza from './MenuPizza';

class AllPizzas extends React.Component {

    render() {
        
        return (
            <div>
                {this.props.fetchedPizzas.map(pizza =>  <MenuPizza key={pizza.standard_pizza.id} standardPizza={pizza} addItem={this.props.addItem} /> )}
            </div>
        );
    }
}

export default AllPizzas;