import React from 'react';
import OrderInput from './Order/OrderInput';
import { Redirect } from 'react-router-dom';

class Order extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            orderIngridients: [],
            badLocation: null,
            isDataInOrder: false,
            isOrderAccepted: false,
            orderAccepted: null
        }

        this.acceptOrderClick = this.acceptOrderClick.bind(this);
    }

    acceptOrderClick(inputValues) {

        console.log(JSON.stringify(inputValues));
        console.log(JSON.stringify(this.state.orderIngridients));

        const addonInputs = this.state.orderIngridients.map(ingridient => {
            return {
                id: null,
                amount: ingridient.value,
                addon: {
                    id: null,
                    name: ingridient.name,
                    price: 3
                }
            }
        });

        const json = {
            id: null,
            customerName: inputValues.name,
            customerSurname: inputValues.surname,
            phoneNumber: inputValues.phone,
            addonInputs: addonInputs
        } 
        console.log(json);
        console.log(JSON.stringify(json))     
        
        fetch("https://pizzeria-spring.herokuapp.com/orders", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
        })
        .then(response => {
            if (response.ok) {
                this.setState({isOrderAccepted : response.ok});
                this.setState({orderAccepted: <Redirect to={{
                    pathname: "/orderAccepted",
                    state: {orderIngridients: this.state.orderIngridients}
                }} />})
            }
        });
    }

    componentDidMount() {
        let ingridients = [];

        if(this.props.location.state !== undefined) {
            this.props.location.state.data.filter(info => info.value > 0)
                .map(info => ingridients.push(info));
        }
        else
        {
            this.setState({
                badLocation: <Redirect to="/" />
            });
        }

        this.setState({
            orderIngridients: ingridients
        })
        console.log(ingridients);
    }

    render(){
        let details;

        if (this.state.orderIngridients.length !== 0)
        {
            details = this.state.orderIngridients.map((info) => {
                    return <p key={info.id}>{info.value}x {info.name}</p>;
            });
        }
        else {
            details = <p>Empty order</p>;
        }

    return (
        <div className="order"> 
            {this.state.isOrderAccepted && this.state.orderAccepted}
           <p>Order details:</p>
            
            {details}
            {this.state.orderIngridients.length !== 0 && <OrderInput acceptOrderClick={this.acceptOrderClick}/>}
            {this.state.badLocation}
            <div>
                <button onClick={this.props.history.goBack} className="button back inputButtons">Go back</button>
            </div>   
        </div>
        );
    }
}

export default Order;