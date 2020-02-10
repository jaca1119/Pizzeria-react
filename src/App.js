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
      
      <Router>

        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        
        <Navbar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/compose" render={(props) => <Compose {...props} isLoaded={this.state.isLoaded} data={this.state.data} />} />
          <Route path="/order" component={Order} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </Router>
    );
  }
}

export default App;
