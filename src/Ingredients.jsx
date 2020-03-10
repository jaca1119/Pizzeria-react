import React from 'react';
import Addon from './Add_on';

class Ingredients extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      addonsValues: [...this.props.fetchedAddons]
    };

    this.addition = this.addition.bind(this);
  }

  addition(index, event) {
    let valueOfItem = this.state.addonsValues[index].value;

    if (valueOfItem === undefined) {
      valueOfItem = 0;
    }

    if (valueOfItem === 2) {
      valueOfItem = 0;
      event.target.classList.remove('active')
    }
    else {
      valueOfItem++;
    }

    if (valueOfItem > 0) {
      event.target.classList.add('active')
    }

    let copyAddonsValues = [...this.state.addonsValues];
    copyAddonsValues[index].value = valueOfItem;    

    this.setState({addonsValues: copyAddonsValues});
    this.props.onChange(copyAddonsValues)
  }

  render () {
    return (
    <div>
        <div id="ingredients" className="ingredients">
          {this.props.fetchedAddons.map((addon, index) => <Addon key={index} info={addon} onClick={(e) => this.addition(index, e)} value={this.state.addonsValues[index].value}/>)}
        </div>
    </div>
    );
  }
}

export default Ingredients;