import React from 'react';
import Addon from './Add_on';

class Ingredients extends React.Component {

    state = {
        addonsValues: [...this.props.fetchedAddons]
    };

    componentDidMount() {
        this.props.onChange(this.state.addonsValues);
    }

    addition = (index) => {
        let valueOfItem = this.state.addonsValues[index].value;

        if (valueOfItem === undefined) {
            valueOfItem = 0;
        }

        if (valueOfItem === 2) {
            valueOfItem = 0;
        }
        else {
            valueOfItem++;
        }

        let copyAddonsValues = [...this.state.addonsValues];
        copyAddonsValues[index].value = valueOfItem;

        this.setState({ addonsValues: copyAddonsValues }, () => this.props.onChange(this.state.addonsValues));
    }

    render() {
        return (
            <div>
                <div id="ingredients" className="ingredients">
                    {this.props.fetchedAddons.map((addon, index) => <Addon key={index} info={addon} onClick={() => this.addition(index)} value={this.state.addonsValues[index].value} />)}
                </div>
            </div>
        );
    }
}

export default Ingredients;