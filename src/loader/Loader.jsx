import React from 'react';
import './loader.css';

function Loader() {
    return (
        <div>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
            <div className="loadingText">Loading data...(if server was idle it may take a while to startup)</div>
        </div>
    );
}
export default Loader;

