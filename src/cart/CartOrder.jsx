import React from 'react';
import Pizza from '../Pizzas/Pizza';
import ComposedPizza from '../Pizzas/ComposedPizza';
import SizeBlock from '../size/SizeBlock';

class CartOrder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalPrice: 0,
            standardPizzas: [],
            composedPizzas: [],
            standardPrices: [],
            composedPrices: []
        };

        this.calculateComposedPizzaPrice = this.calculateComposedPizzaPrice.bind(this);
        this.calculateStandardPizzaPrice = this.calculateStandardPizzaPrice.bind(this);
    }

    componentDidMount() {
        const pizzas = this.props.orderCart.pizzas;

        let standardPizzas = [];
        let composedPizzas = [];
        let standardPrices = [];
        let composedPrices = [];

        pizzas.forEach((pizza, index) => {
            if (pizza.standard_pizza !== undefined) {
                standardPizzas.push(pizza);
                standardPrices.push(this.calculateStandardPizzaPrice(pizza.ordered_standard_pizza.standardPizza, pizza.ordered_standard_pizza.size));
            } else if (pizza.composed_pizza !== undefined) {
                composedPizzas.push(pizza);
                composedPrices.push(this.calculateComposedPizzaPrice(pizza.composed_pizza.addonsInput, pizza.composed_pizza.size));
            } else if (pizza.ordered_standard_pizza !== undefined) {
                standardPizzas.push(pizza);
                standardPrices.push(this.calculateStandardPizzaPrice(pizza.ordered_standard_pizza.standardPizza, pizza.ordered_standard_pizza.size));
            }
        });
        
        this.setState({
            standardPizzas: [...standardPizzas],
            composedPizzas: [...composedPizzas],
            standardPrices: [...standardPrices],
            composedPrices: [...composedPrices]
        }, this.calculateTotalPrice);
    }

    calculateComposedPizzaPrice(addonsInput, size) {
        let sum = 0;
    
        addonsInput.forEach(addonInput => {            
            sum += addonInput.amount * addonInput.addon.price;
        });
        
        sum *= size.priceMultiplier;

        const roundedSum = Math.round(sum);
        
        return roundedSum;
    }
    
    calculateStandardPizzaPrice(orderedStandardPizza, size) {
        let price = size.priceMultiplier * orderedStandardPizza.standard_pizza.priceIntegralMultipleValue / 100;

        const roundedPrice = Math.round(price);
            
        return roundedPrice;
    }

    calculateTotalPrice = () => {
        let totalPrice = 0;

        this.state.composedPrices.forEach(price => totalPrice += price);
        this.state.standardPrices.forEach(price => totalPrice += price);
        
        this.setState({totalPrice: totalPrice});
    }
    
    render() {
        return (
            <div>
                {this.state.standardPizzas.map((pizza, index) => 
                <div key={index}>
                    <Pizza standardPizza={pizza.ordered_standard_pizza.standardPizza}/>
                    Size: <SizeBlock size={pizza.ordered_standard_pizza.size}/> cm
                    Price: {this.state.standardPrices[index]}
                </div>)}

                {this.state.composedPizzas.map((pizza, index) => 
                    <div key={index}>
                        <ComposedPizza composedPizza={pizza} />
                        Size: <SizeBlock size={pizza.composed_pizza.size}/> cm
                        Price: {this.state.composedPrices[index]}
                    </div>)}
                <hr />
                Total price: {this.state.totalPrice}
            </div>
        );
    }
}

export default CartOrder;