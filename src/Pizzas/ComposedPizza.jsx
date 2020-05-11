import React from 'react';

function ComposedPizza(props) {

    let ingredients = props.composedPizza.composed_pizza.addonsInput.map(addonInput => addonInput.addon.name + " x " + addonInput.amount).join(", ");

    return (
        <div className="pizza">
            <h3>Name: Custom pizza</h3>
            <hr />
            <div className="menu-ingredients">
                Ingredients: {ingredients}
            </div>
        </div>
    );
}

export default ComposedPizza;