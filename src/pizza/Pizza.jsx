import React from 'react';
import './pizza.css';

function Pizza(props) {

    let ingredients = props.standardPizza.standard_pizza.addons.map(ingridient => ingridient.name).join(", ");

    return (
        <div className="pizza">
            <h3>Name: {props.standardPizza.standard_pizza.name}</h3>
            <hr />
            <div className="menu-ingredients">
                Ingredients: {ingredients}
            </div>
        </div>
    );
}

export default Pizza;