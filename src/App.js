import React, { Component } from 'react';
import Addons from "./Addons"

class App extends Component {

  state = 
  {
    data: []
  }

  componentDidMount() {
    fetch("https://pizzeria-spring.herokuapp.com/addons")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({ data: json })
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(addon => <Addons key={addon.id} info={addon}/>)}
      </div>
    );
  }
}

export default App;
