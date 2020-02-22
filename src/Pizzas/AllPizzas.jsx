import React from 'react';
import MenuPizza from './MenuPizza';
import CartBar from '../cart/CartBar';

class AllPizzas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
        
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        let items = this.state.items;

        items.push(item);

        this.setState({items: items});
    }

    render() {
        
        return (
            <div>
                <CartBar items={this.state.items} />
                {this.props.fetchedPizzas.map(pizza =>  <MenuPizza key={pizza.id} standardPizza={pizza} addItem={this.addItem} /> )}
            </div>
        );
    }
}

export default AllPizzas;