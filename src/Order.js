import React from 'react';

class Order extends React.Component{

    render(){
    return (
        <div className="order"> 
           <p>Order details:</p>
            {this.props.location.state.data.map((info) => {
                if (info.value > 0)
                    return <p key={info.id}>{info.value}x {info.name}</p>;
                else
                    return null;
            }
            )}
            <div>
                <button onClick={this.props.history.goBack} className="button">Go back</button>
            </div>   
        </div>
        );
    }
}

export default Order;