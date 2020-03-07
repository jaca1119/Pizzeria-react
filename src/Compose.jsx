import React, { Component } from 'react';
import Loader from './Loader';
import Ingredients from './Ingredients';
import Popup from './cart/Popup';

class Compose extends Component{
    constructor(props) {
        super(props)
        this.state = {
          addons: [],
          isPopupShown: false,
          timeout: null
        };
    
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addonsToComposePizza = this.addonsToComposePizza.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
      }

      handleFieldChange(addId, value, name) {
        let copyAddons = [...this.state.addons];
    
        if (copyAddons.filter(data => data.id === addId).length)
        {
          let index = copyAddons.findIndex(addon => addon.id === addId);
          copyAddons[index].value = value;
    
        }
        else
        {
          copyAddons.push({
            id: addId,
            name: name,
            value: value
          });
        }
    
        this.setState({
          addons: copyAddons
        });
      }

      addToOrder() {
        this.setState({isPopupShown: true});
        this.setState({timeout: setTimeout(() => {
            this.setState({isPopupShown: false});
          }, 1000)
        });

        this.props.addItem(this.addonsToComposePizza())
      }

      addonsToComposePizza() {
        let composed_pizza = {};
        let addons = [];
        let addonsInput = {};

        this.state.addons.filter(addon => addon.value !== 0)
          .forEach(addon => {
            let nextAddon = {};
            nextAddon["amount"] = addon.value;
            nextAddon["addon"] = {name: addon.name};
            addons.push(nextAddon);
          });

        addonsInput["addonsInput"] = addons;

        composed_pizza["composed_pizza"] = addonsInput;
        
        return composed_pizza;
      }

      render() {
        let ingredients;

        if (this.props.isAddonsLoaded)
        {
          ingredients = <Ingredients fetchedAddons={this.props.fetchedAddons} onChange={this.handleFieldChange} addons={this.state.addons}/>
        }
        else
        {
          ingredients = <Loader />;
        }

        return (
          <div className="compose">

            <header className='pizza'>Compose your own pizza!</header>
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

