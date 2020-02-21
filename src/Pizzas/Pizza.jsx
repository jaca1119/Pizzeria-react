import React from 'react';

function Pizza(props) {

    let ingridients = props.standardPizza.addons.map(ingridient => ingridient.name).join(", ");

    return (
        <div className="pizza">        
            <h3>Name: {props.standardPizza.name}</h3>
            <hr />
            <div className="menu-ingridients">
                Ingridients: {ingridients}
            </div>
        </div>
    );
}

export default Pizza;