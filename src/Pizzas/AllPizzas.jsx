import React from 'react';
import Pizza from './Pizza';

function AllPizzas(props) {
    return (
        <div>
            {props.fetchedPizzas.map(pizza =>  <Pizza key={pizza.id} info={pizza} /> )}
        </div>
    );
}

export default AllPizzas;