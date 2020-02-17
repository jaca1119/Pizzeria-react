import React, { Component } from 'react';

class OrderInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            phone: ''
        };
        
        this.handleInput = this.handleInput.bind(this);
        this.handleAcceptOrderClick = this.handleAcceptOrderClick.bind(this);
    }

    handleInput(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    handleAcceptOrderClick() {
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

                <div>
                    <button onClick={this.handleAcceptOrderClick} className="button inputButtons">Accept order!</button>
                </div>
            </div>
        );
    }
}

export default OrderInput;
