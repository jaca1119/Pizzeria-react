import React from 'react';
import Pizza from '../Pizzas/Pizza';


function Overlay(props) {

    props.items.map((item, i) => {console.log(item)});

    return (
        <div id="overlay" className="overlay" onClick={props.showOrCloseOverlay}>
            <div className="cart">
                {props.items.map((item, i) => <p>{JSON.stringify(item)}</p>)}
            </div>
        </div>
    );
}

export default Overlay;