import React, { Component } from 'react';

class Welcome extends Component {

    render() {
        return (
            <div className="welcome">
                <div className="header">Welcome to our pizzeria!</div>
                <div className="text">Take a look at <b>menu</b>, or <b>compose</b> your own pizza!</div>
            </div>
        );
    }
}

export default Welcome;