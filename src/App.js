import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Compose from './Compose';
import Order from './Order';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    if(!this.state.isLoaded){
      fetch("https://pizzeria-spring.herokuapp.com/addons")
        .then(response => response.json())
        .then(json => {
          this.setState({ data: json });
          this.setState({isLoaded: true});
        });
    }
  }

  render() {
    return (
      <Router basename="/Pizzeria-react">
        <Switch>
          <Route exact path="/" render={(props) => <Compose {...props} isLoaded={this.state.isLoaded} data={this.state.data} />} />
          <Route path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default App;
