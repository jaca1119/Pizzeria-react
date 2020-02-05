import React from 'react';
import logo from './img/duck.jpg';

function Logo() {
    return (
        <div className="logo">
            <img className="avatar" src={logo} alt="Logo" />
            <div className="title">Duck Pizza!</div>
        </div>
    );
}

export default Logo;