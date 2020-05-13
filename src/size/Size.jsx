import React from 'react';
import './sizes.css';

class Size extends React.Component {

    state = {
        price: null
    }

    componentDidMount() {
        const standardPizza = this.props.standardPizza.standard_pizza;
        const size = this.props.sizes[0];
        let price = calculatePrice(standardPizza.priceIntegralMultipleValue, size.priceMultiplier);
        this.setState({ price: price })

        this.props.setPrice(price);
        this.props.setSize(size);
    }

    addClass = (size, event) => {
        event.target.parentElement.childNodes.forEach(node => node.classList.remove("active"));

        event.target.classList.add("active");

        const standardPizza = this.props.standardPizza.standard_pizza;
        let price = calculatePrice(standardPizza.priceIntegralMultipleValue, size.priceMultiplier);

        this.setState({ price: price });
        this.props.setPrice(price);
        this.props.setSize(size);
    }


    render() {
        return (
            <div id="size" className="size">
                <div className="cm">Size [cm]:</div>
                {this.props.sizes.map((size, index) => {
                    if (index === 0)
                        return <div key={size.id} className="size-item active" onClick={(e) => this.addClass(size, e)}>{size.sizeInCm}</div>
                    else
                        return <div key={size.id} className="size-item" onClick={(e) => this.addClass(size, e)}>{size.sizeInCm}</div>
                })}

                <div className="price">Price: {this.state.price}</div>
            </div>
        );
    }
}

export default Size;

function calculatePrice(priceIntegralMultipleValue, priceMultiplier) {
    let price = priceMultiplier * priceIntegralMultipleValue / 100;

    return Math.round(price);
}