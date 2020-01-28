import React, { Component } from 'react';
import Addon from './Add_on';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      addons: []
    };

    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }


  componentDidMount() {
    fetch("https://pizzeria-spring.herokuapp.com/addons")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json })
      });
  }
  
  handleFieldChange(addId, value) {
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
        value: value
      });
    }

    this.setState({
      addons: copyAddons
    });
  }

  handleOrderClick() {

  }

  render() {
    return (
      <div className="compose">
        <header>Compose your own pizza!</header>
        <div className="ingridients">
          {this.state.data.map(addon => <Addon key={addon.id} info={addon} onChange={this.handleFieldChange}/>)}
        </div>
        <div className="btn">
          <button onClick={this.handleOrderClick}>Order!</button>
        </div>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    );
  }
}

export default App;
