import React, { Component } from 'react';
import Addon from './Add_on';
import {
    Link  } from "react-router-dom";
import Logo from './Logo';

class Compose extends Component{
    constructor(props) {
        super(props)
        this.state = {
          data: [],
          addons: []
        };
    
        this.handleFieldChange = this.handleFieldChange.bind(this);
      }

      componentDidMount() {
        fetch("https://pizzeria-spring.herokuapp.com/addons")
          .then(response => response.json())
          .then(json => {
            this.setState({ data: json })
          });
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
        return (
          <div className="compose">
            <Logo />
            <header className='pizza'>Compose your own pizza!</header>
            <div className="ingridients">
              {this.state.data.map(addon => <Addon key={addon.id} info={addon} onChange={this.handleFieldChange}/>)}
            </div>
            <div className="btn">

                <Link to={{
                    pathname: "/order",
                    state: {data: this.state.addons}
                }}>
                  <button>Order!</button>
                </Link>

            </div>

            
          </div>
        );
      }
}

export default Compose;