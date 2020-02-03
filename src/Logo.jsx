import React from 'react';
import logo from './img/duck.jpg';

function Logo() {
    return (
        <div>
            <img className="avatar" src={logo} alt="Logo" />
        </div>
    );
}

export default Logo;