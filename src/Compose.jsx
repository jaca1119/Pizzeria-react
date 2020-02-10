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
            
          </div>
        );
      }
}

export default Compose;