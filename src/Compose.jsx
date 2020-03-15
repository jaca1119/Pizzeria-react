import React, { Component } from 'react';
import Loader from './Loader';
import Ingredients from './Ingredients';
import Popup from './cart/Popup';
import SizeCompose from './size/SizeCompose';

class Compose extends Component{
    constructor(props) {
        super(props)
        this.state = {
          selectedAddonsValue: [],
          isPopupShown: false,
          timeout: null,
          price: 0,
          size: {}
        };
    
        this.setAddons = this.setAddons.bind(this);
        this.addonsToComposePizza = this.addonsToComposePizza.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.setPrice = this.setPrice.bind(this);
        this.setSize = this.setSize.bind(this);
      }

      componentDidMount() {
        this.setState({size: this.props.sizes[0]});
      }

      addToOrder() {
        if (this.state.selectedAddonsValue.some(addon => addon.hasOwnProperty("value") && addon.value !== 0))
        {
          this.setState({isPopupShown: true});
          this.setState({timeout: setTimeout(() => {
              this.setState({isPopupShown: false});
            }, 1000)
          });

          this.props.addItem(this.addonsToComposePizza());
        }
      }

      addonsToComposePizza() {
        let composed_pizza = {};
        let addonsInput = [];

        this.state.selectedAddonsValue.filter(addon => addon.hasOwnProperty("value") && addon.value !== 0)
          .forEach(addon => {            
            let nextAddon = {};
            nextAddon["amount"] = addon.value;
            nextAddon["addon"] = {
              name: addon.name,
              price: addon.price
            };
            addonsInput.push(nextAddon);
          });

        composed_pizza["composed_pizza"] = {
          addonsInput: addonsInput,
          size: this.state.size
        };
        
        return composed_pizza;
      }

      setSize(size) {
        this.setState({size: size}, this.setPrice);
      }

      setAddons(addons) {
        this.setState({selectedAddonsValue: [...addons]}, this.setPrice);
      }

      setPrice() { 
        let sum = 0;

        this.state.selectedAddonsValue.filter(addon => addon.value !== undefined && addon.value !== 0)
        .forEach(addon => {
          sum += addon.value * addon.price;
        });
        
        sum *= this.state.size.priceMultiplier;

        this.setState({price: Math.round(sum)});        
      }

      render() {
        let ingredients;
        let size;

        if (this.props.isAddonsLoaded)
        {
          ingredients = <Ingredients fetchedAddons={this.props.fetchedAddons} onChange={this.setAddons} addons={this.state.selectedAddonsValue}/>
          size = <SizeCompose sizes={this.props.sizes} setSize={this.setSize} price={this.state.price} />
        }
        else
        {
          ingredients = <Loader />;
        }

        return (
          <div className="compose">
            <header className='pizza'>Compose your own pizza!</header>
            {size}
            {ingredients}
            <div className="btn">
              {this.state.isPopupShown && <Popup />}
              <button className="button" onClick={this.addToOrder} >Add to order</button>
            </div>
          </div>
        );
      }
}

export default Compose;

