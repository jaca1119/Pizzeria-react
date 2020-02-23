import React from 'react';
import MenuPizza from './MenuPizza';

function AllPizzas(props) {
    return (
        <div>
            {props.fetchedPizzas.map(pizza =>  <MenuPizza key={pizza.id} standardPizza={pizza} /> )}
        </div>
    );
}

export default AllPizzas;