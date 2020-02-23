import React from 'react';

function Pizza(props) {

    let ingredients = props.standardPizza.addons.map(ingredient => ingredient.name).join();

    return (
        <div className="pizza">        
            <h3>Name: {props.standardPizza.name}</h3>
            <hr />
            <div className="menu-ingredients">
                Ingredients: {ingredients}
            </div>
        </div>
    );
}

export default Pizza;