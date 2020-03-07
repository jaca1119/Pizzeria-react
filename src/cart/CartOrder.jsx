import React from 'react';
import Pizza from '../Pizzas/Pizza';
import ComposedPizza from '../Pizzas/ComposedPizza';

class CartOrder extends React.Component {
    
    render() {
        const orderCart = this.props.orderCart;
        const pizzas = orderCart.pizzas;

        let standardPizzas = [];
        let composedPizzas = [];

        pizzas.forEach((pizza, index) => {
            if (pizza.standard_pizza !== undefined) {
                standardPizzas.push(<Pizza key={index} standardPizza={pizza} />)
            } else if (pizza.composed_pizza !== undefined) {
                composedPizzas.push(<ComposedPizza key={index} composedPizza={pizza} />)
            } else if (pizza.ordered_standard_pizza !== undefined) {
                standardPizzas.push(<Pizza key={index} standardPizza={pizza.ordered_standard_pizza.standardPizza} />)
            }
        });

        return (
            <div>
                {standardPizzas}
                {composedPizzas}
                <hr />
            </div>
        );
    }

}

export default CartOrder;