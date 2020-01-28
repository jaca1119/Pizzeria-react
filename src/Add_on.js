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
  }

  render() {
    return (
        <div className="addons" addid={this.props.info.id} dataval={this.state.numberOfItem}
        onClick={this.addition} 
        onMouseEnter={(e) => e.target.classList.add('hover')} 
        onMouseLeave={(e) => e.target.classList.remove('hover')}>

          {this.state.numberOfItem > 0 && <span>{this.state.numberOfItem} x </span>} {this.props.info.name}

        </div>
    );
  }
}

export default Addon;
