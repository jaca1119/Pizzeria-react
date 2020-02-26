import React from 'react';

function ComposedPizza(props) {

    let ingridients = props.composedPizza.composed_pizza.addonsInput.map(addonInput => addonInput.addon.name + " x" + addonInput.amount).join(", ");
    
    return (
        <div className="pizza">        
            <h3>Name: Composed pizza</h3>
            <hr />
            <div className="menu-ingridients">
                Ingridients: {ingridients}
            </div>
        </div>
    );
}

export default ComposedPizza;