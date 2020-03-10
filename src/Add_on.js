import React, { Component } from 'react';

class Addon extends Component {



  render() {
    return (
        <div className="addons"
        onClick={this.props.onClick}>

          {this.props.value > 0 && <span>{this.props.value} x </span>} {this.props.info.name}

        </div>
    );
  }
}

export default Addon;
