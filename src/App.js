import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Compose from './Compose';
import Order from './Order';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Compose} />
          <Route path="/order" component={Order}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
