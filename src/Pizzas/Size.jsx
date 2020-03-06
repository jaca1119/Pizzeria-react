import React from 'react';

class Size extends React.Component {

    render() {
        return (
            <div className="size">
                {console.log(this.props.sizes)}
                {this.props.sizes.map(size => <div className="size-item">{size.sizeInCm}</div>)}
            </div>
        );
    }
}

export default Size;