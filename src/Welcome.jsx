import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

function Welcome() {

    return (
        <div className="welcome">
            <div className="header">Welcome to our pizzeria!</div>
            <div className="text">Take a look at <b>menu</b>, or <b>compose</b> your own pizza!</div>
            <Link to="/login">
                <button className="button">Go to secret admin panel</button>
            </Link>
        </div>
    );
    
}

export default Welcome;