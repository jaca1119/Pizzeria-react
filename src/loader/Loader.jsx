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
            <div className="loadingText">Loading data...</div>
        </div>
    );
}
export default Loader;

