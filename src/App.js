import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Compose from './compose/Compose';
import Menu from './pizza/Menu';
import Logo from './navLogo/Logo';
import Navbar from './navLogo/Navbar';
import Welcome from './Welcome';
import OrderAccepted from './order/OrderAccepted';
import CartBar from './cart/CartBar';
import Signin from './admin/Signin';
import AdminPanel from './admin/AdminPanel';
import AuthenticatedRoute from './admin/AuthenticatedRoute';
import Payment from './payment/Payment';


class App extends Component {

  state = {
    fetchedAddons: [],
    fetchedStandardPizzas: [],
    fetchedSizes: [],
    items: [],
    isAddonsLoaded: false,
    isStandardPizzasLoaded: false,
    isSizesLoaded: false
  };


  componentDidMount() {
    if (!this.state.isAddonsLoaded) {
      fetch("https://pizzeria-spring.herokuapp.com/addons")
        .then(response => response.json())
        .then(json => {
          this.setState({ fetchedAddons: json });
          this.setState({ isAddonsLoaded: true });
        });
    }

    if (!this.state.isStandardPizzasLoaded) {
      fetch("https://pizzeria-spring.herokuapp.com/standard")
        .then(response => response.json())
        .then(json => {
          this.setState({ fetchedStandardPizzas: json });
          this.setState({ isStandardPizzasLoaded: true });
        });
    }

    if (!this.state.isSizesLoaded) {
      fetch("https://pizzeria-spring.herokuapp.com/sizes")
        .then(response => response.json())
        .then(json => {
          this.setState({ isSizesLoaded: true });
          this.setState({ fetchedSizes: json })
        })
    }
  }

  addItem = (item) => {
    let items = this.state.items;

    items.push(item);

    this.setState({ items: items });
  }

  clearItems = () => {
    this.setState({ items: [] });
  }

  deleteItem = (selectedItem) => {
    let items = [...this.state.items];

    let clearedItems = items.filter(item => JSON.stringify(item) !== JSON.stringify(selectedItem));
    this.setState({ items: [...clearedItems] });
  }


  render() {
    return (

      <Router>

        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <CartBar items={this.state.items} clearItems={this.clearItems} deleteItem={this.deleteItem} />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/compose" render={(props) => <Compose {...props} isAddonsLoaded={this.state.isAddonsLoaded} fetchedAddons={this.state.fetchedAddons} addItem={this.addItem} sizes={this.state.fetchedSizes} isSizesLoaded={this.state.isSizesLoaded} />} />
          <Route path="/orderAccepted" component={OrderAccepted} />
          <Route path="/menu" render={(props) => <Menu {...props} isStandardPizzasLoaded={this.state.isStandardPizzasLoaded} fetchedStandardPizzas={this.state.fetchedStandardPizzas} addItem={this.addItem} sizes={this.state.fetchedSizes} />} />
          <Route path="/login" component={Signin} />
          <Route path="/payment" component={Payment} />
          <AuthenticatedRoute path="/admin" component={AdminPanel} />
        </Switch>
      </Router>
    );
  }
}

export default App;
