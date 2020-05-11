import React, { Component } from 'react';

class Addon extends Component {

  render() {

    const activeClassName = this.props.value > 0 ? " active" : "";

    return (
      <div className={"addons" + activeClassName}
        onClick={this.props.onClick}>

        {(this.props.value !== undefined && this.props.value > 0) && <span>{this.props.value} x </span>} {this.props.info.name}

      </div>
    );
  }
}

export default Addon;
