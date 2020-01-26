import React, { Component } from 'react';

class Addons extends Component {


  render() {
    return (
      <div>
        <p>Id: {this.props.info.id}</p>
        <p>Name: {this.props.info.name}</p>
        <p>Price: {this.props.info.price}</p>
      </div>
    );
  }
}

export default Addons;
