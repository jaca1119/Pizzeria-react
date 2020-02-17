import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Compose from './Compose';
import Order from './Order';
import Menu from './Menu';
import Logo from './Logo';
import Navbar from './Navbar';
import Welcome from './Welcome';
import OrderAccepted from './Order/OrderAccepted';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      fetchedAddons: [],
      fetchedStandardPizzas: [],
      isAddonsLoaded: false,
      isStandardPizzasLoaded: false
    };
  }

  componentDidMount() {
    if(!this.state.isAddonsLoaded){
      fetch("https://pizzeria-spring.herokuapp.com/addons")
        .then(response => response.json())
        .then(json => {
          this.setState({ fetchedAddons: json });
          this.setState({isAddonsLoaded: true});
        });
    }

    if(!this.state.isStandardPizzasLoaded){
      fetch("https://pizzeria-spring.herokuapp.com/standard")
        .then(response => response.json())
        .then(json => {
          this.setState({ fetchedStandardPizzas: json });
          this.setState({isStandardPizzasLoaded: true});
        });
    }
  }

  render() {
    return (
      
      <Router>

        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        
        <Navbar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/compose" render={(props) => <Compose {...props} isAddonsLoaded={this.state.isAddonsLoaded} fetchedAddons={this.state.fetchedAddons} />} />
          <Route path="/order" component={Order} />
          <Route path="/orderAccepted" component={OrderAccepted} />
          <Route path="/menu" render={(props) => <Menu {...props} isStandardPizzasLoaded={this.state.isStandardPizzasLoaded} fetchedStandardPizzas={this.state.fetchedStandardPizzas} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
