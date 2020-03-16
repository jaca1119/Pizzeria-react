import React from 'react';

class SizeCompose extends React.Component {

    addClass = (size, event) => {        
        event.target.parentElement.childNodes.forEach(node => node.classList.remove("active"));

        event.target.classList.add("active");
        
        this.props.setSize(size);
    }

    render() {
        return (
            <div id="size" className="size">
                <div className="cm">Size [cm]:</div>
                {this.props.sizes.map((size, index) => {
                    if (index === 0)
                        return <div key={size.id} className="size-item active" onClick={(e) => this.addClass(size, e)}>{size.sizeInCm}</div>
                    else
                        return <div key={size.id} className="size-item" onClick={(e) => this.addClass(size, e)}>{size.sizeInCm}</div>
                })}

                <div className="price">Price: {this.props.price}</div>
            </div>
        );
    }
}

export default SizeCompose;