import React, { Component } from 'react';
import Addon from './Add_on';
import {
    Link  } from "react-router-dom";
import Loader from './Loader';

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

        if (this.props.isLoaded)
        {
          ingridients = (
            <div>
              <div className="ingridients">
                {this.props.data.map(addon => <Addon key={addon.id} info={addon} onChange={this.handleFieldChange}/>)}
              </div>
              <div className="btn">

                  <Link to={{
                      pathname: "/order",
                      state: {data: this.state.addons}
                  }}>
                    <button className="button">Order!</button>
                  </Link>
                  
              </div>
          </div>);
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