import React, { Component } from 'react';
import Loader from './Loader';
import Ingridients from './Ingridients';

class Compose extends Component{
    constructor(props) {
        super(props)
        this.state = {
          addons: []
        };
    
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.addonsToComposePizza = this.addonsToComposePizza.bind(this);
      }

      handleFieldChange(addId, value, name) {
        let copyAddons = this.state.addons;
    
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

      addonsToComposePizza() {
        let composed_pizza = {};
        let addons = [];
        let addonsInput = {};

        this.state.addons.forEach(addon => {
          let obj = {};
          obj["amount"] = addon.value;
          obj["addon"] = {name: addon.name};
          addons.push(obj);
        });

        addonsInput["addonsInput"] = addons;

        composed_pizza["composed_pizza"] = addonsInput;
        
        return composed_pizza;
      }

      render() {
        let ingridients;

        if (this.props.isAddonsLoaded)
        {
          ingridients = <Ingridients fetchedAddons={this.props.fetchedAddons} onChange={this.handleFieldChange} addons={this.state.addons}/>
        }
        else
        {
          ingridients = <Loader />;
        }

        return (
          <div className="compose">

            <header className='pizza'>Compose your own pizza!</header>
            {ingridients}
            <div className="btn">
              <button className="button" onClick={() => this.props.addItem(this.addonsToComposePizza())} >Add to order</button>
            </div>
          </div>
        );
      }
}

export default Compose;

