import React, { Component } from 'react';

class Addon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfItem: 0
    };

    this.addition = this.addition.bind(this);
  }

  addition(e) {
    let numberOfItem = this.state.numberOfItem;
    if (numberOfItem === 2)
    {
      numberOfItem = 0;
      this.setState({numberOfItem: 0});
      e.target.classList.remove('active')
    }
    else
    {
      this.setState({numberOfItem: this.state.numberOfItem + 1});
      numberOfItem++;
    }

    if (numberOfItem > 0)
    {
      e.target.classList.add('active')
    }

    this.props.onChange(this.props.info.id, numberOfItem, this.props.info.name);

  }

  render() {
    return (
        <div className="addons"
        onClick={this.addition}>

          {this.state.numberOfItem > 0 && <span>{this.state.numberOfItem} x </span>} {this.props.info.name}

        </div>
    );
  }
}

export default Addon;
