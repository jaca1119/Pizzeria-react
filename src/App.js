import React, { Component } from 'react';
import Addon from './Add_on';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    };

    this.handleOrderClick = this.handleOrderClick.bind(this);
  }


  componentDidMount() {
    fetch("https://pizzeria-spring.herokuapp.com/addons")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json })
      });
  }

  handleOrderClick() {

  }

  render() {
    return (
      <div className="compose">
        <header>Compose your own pizza!</header>
        <div className="ingridients">
          {this.state.data.map(addon => <Addon key={addon.id} info={addon}/>)}
        </div>
        <div className="btn">
          <button onClick={this.handleOrderClick}>Order!</button>
        </div>
      </div>
    );
  }
}

export default App;
