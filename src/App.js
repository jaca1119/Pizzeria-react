import React, { Component } from 'react';
import Addon from './Add_on';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    fetch("https://pizzeria-spring.herokuapp.com/addons")
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json })
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(addon => <Addon key={addon.id} info={addon}/>)}
      </div>
    );
  }
}

export default App;
