import React from 'react';

class Order extends React.Component{

    render(){

        let occurances = 0;
        let details = this.props.location.state.data.map((info) => {
            if (info.value > 0)
            {
                occurances++;
                return <p key={info.id}>{info.value}x {info.name}</p>;
            }
            else
                return null;
        });

        if (occurances === 0)
        {
            details = <p>Empty order</p>;
        }
    return (
        <div className="order"> 
           <p>Order details:</p>
            {details}
            <div>
                <button onClick={this.props.history.goBack} className="button">Go back</button>
            </div>   
        </div>
        );
    }
}

export default Order;