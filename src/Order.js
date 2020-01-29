import React from 'react';

class Order extends React.Component{

    render(){
    return (
        <div className="order"> 
           <p>Order details:</p>
            {this.props.location.state.data.map((info) => 
            <p key={info.id}>{info.value}x {info.name}</p>)}   
        </div>
        );
    }
}

export default Order;