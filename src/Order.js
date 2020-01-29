import React from 'react';

class Order extends React.Component{

    render(){
        console.log(this.props);
        
    return (
        <div> 
            {JSON.stringify(this.props.location.state.data)}
        </div>
        );
    }
}

export default Order;