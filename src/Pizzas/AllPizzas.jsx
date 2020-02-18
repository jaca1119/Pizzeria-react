import React from 'react';
import Pizza from './MenuPizza';

function AllPizzas(props) {
    return (
        <div>
            {props.fetchedPizzas.map(pizza =>  <Pizza key={pizza.id} standardPizza={pizza} /> )}
        </div>
    );
}

export default AllPizzas;