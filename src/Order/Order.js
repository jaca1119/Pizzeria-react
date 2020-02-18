import React from 'react';
import OrderInput from './OrderInput';
import { Redirect } from 'react-router-dom';
import Pizza from '../Pizzas/Pizza';

class Order extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            orderIngridients: [],
            badLocation: null,
            isDataInOrder: false,
            isOrderAccepted: false,
            isStandardOrder: false,
            isStandardOrderAccepted: false,
            shouldShowInputs: false,
            orderAccepted: null
        }

        this.acceptOrderClick = this.acceptOrderClick.bind(this);
    }

    acceptOrderClick(inputValues) {

        console.log(JSON.stringify(inputValues));
        console.log(JSON.stringify(this.state.orderIngridients));

        if (this.state.isStandardOrder) {
            this.sendStandardOrderRequest(inputValues);
        }
        else {
            this.sendCustomOrderRequest(inputValues);
        }   
    }

    sendStandardOrderRequest(inputValues) {

        const json = {
            name: inputValues.name,
            surname: inputValues.surname,
            phone: inputValues.phone,
            standardPizza: this.props.location.state.standardOrder
        };

        fetch("https://pizzeria-spring.herokuapp.com/ordersStandard", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json)
        })
        .then(
            response => {
                console.log(response);
                this.setState({
                    isStandardOrderAccepted: true
                });
            },
            errorResponse => {
                console.log(errorResponse);
            }
        );
    }

    sendCustomOrderRequest(inputValues) {
        const addonInputs = this.state.orderIngridients.map(ingridient => {
            return {
                amount: ingridient.value,
                addon: {
                    name: ingridient.name,
                    price: 3
                }
            }
        });
    
        const json = {
            name: inputValues.name,
            surname: inputValues.surname,
            phone: inputValues.phone,
            addonInputs: addonInputs
        }    
        
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
            }
        });
    }

    componentDidMount() {
        let ingridients = [];
        let location = this.props.location;   

        if (location.state === undefined) {
            this.setState({
                badLocation: <Redirect to="/" />
            });
            return;
        }
        
        if(location.state.data !== undefined) {
            location.state.data.filter(info => info.value > 0)
                .map(info => ingridients.push(info));
        }
        else if (location.state.standardOrder !== undefined) {
            this.setState({isStandardOrder: true});
            this.setState({shouldShowInputs: true});
        }

        this.setState({
            orderIngridients: ingridients
        })

        if (ingridients.length !== 0)
        {
            this.setState({shouldShowInputs: true});
        }

        console.log(ingridients);
    }

    render(){
        let details;
        let location = this.props.location;

        if (this.state.isOrderAccepted) {
            return <Redirect to={{
                pathname: "/orderAccepted",
                state: {orderIngridients: this.state.orderIngridients}
            }} />;
        }

        if (this.state.isStandardOrderAccepted) {
            return <Redirect to={{
                pathname: "/orderAccepted",
                state: {standardOrder: location.state.standardOrder}
            }} />
        }
        
        if (this.state.orderIngridients.length !== 0)
        {
            details = this.state.orderIngridients.map((info) => {
                    return <p key={info.id}>{info.value}x {info.name}</p>;
            });
        }
        else if (this.state.isStandardOrder) {
            details = <Pizza standardPizza={location.state.standardOrder} />
        }
        else {
            details = <p>Empty order</p>;
        }

    return (
        <div className="order"> 

           <p>Order details:</p>
            
            {details}
            {this.state.shouldShowInputs && <OrderInput acceptOrderClick={this.acceptOrderClick}/>}
            {this.state.badLocation}
            <div>
                <button onClick={this.props.history.goBack} className="button back inputButtons">Go back</button>
            </div>   
        </div>
        );
    }
}

export default Order;