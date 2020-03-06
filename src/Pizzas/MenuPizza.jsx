import React from 'react';
import Pizza from './Pizza';
import Cart from '../cart/Cart';
import Size from '../size/Size';


class MenuPizza extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            price: 0,
            size: {}
        };

        this.setPrice = this.setPrice.bind(this);
        this.setSize = this.setSize.bind(this);
    }

    setPrice(price) {
        this.setState({price: price});
    }

    setSize(size) {
        this.setState({size: size});
    }

    render() {
        
        return (
            <div className="menu-pizza">
                
                <Pizza standardPizza={this.props.standardPizza} />
                <Size sizes={this.props.sizes} standardPizza={this.props.standardPizza} setPrice={this.setPrice} setSize={this.setSize}/>
                <Cart addItem={this.props.addItem} standardPizza={this.props.standardPizza} price={this.state.price} size={this.state.size}/>

            </div>
        );
    }
}

export default MenuPizza;