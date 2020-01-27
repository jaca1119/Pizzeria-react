import React, { Component } from 'react';

class Addon extends Component {

  render() {
    return (
      <div>
        <p>Name: {this.props.info.name}</p>
      </div>
    );
  }
}

export default Addon;
