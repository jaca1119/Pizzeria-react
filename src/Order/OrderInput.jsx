import React, { Component } from 'react';

class OrderInput extends Component {
    
    state = {
        name: '',
        surname: '',
        phone: ''
    };

    handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        },() => this.props.updateOrder(this.state));

    }

    handleAcceptOrderClick = () => {
        this.props.acceptOrderClick(this.state);
    }


    render() {
        return (
            <div className="inputs">
                <label>Name:</label>
                <input type="text" name='name' value={this.state.name} onChange={this.handleInput}></input>
                <label>Surname:</label> 
                <input type="text" name='surname' value={this.state.surname} onChange={this.handleInput}></input>
                <label>Phone number</label> 
                <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput}></input>
            </div>
        );
    }
}

export default OrderInput;
