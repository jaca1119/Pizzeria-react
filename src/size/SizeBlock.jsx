import React from 'react';

function SizeBlock(props) {
    const size = props.size;

    return (
        <div key={size.id} className="size-item active">{size.sizeInCm}</div>
    );
}

export default SizeBlock;