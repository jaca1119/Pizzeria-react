import React from 'react';

function Pizza(props) {
    return (
        <div className="pizza">
            Name: {props.info.name}
            <hr />
            Ingridients: {props.info.addons.map(ingridient => ingridient.name + " " )}
            <hr />
            <hr />
        </div>
    );
}

export default Pizza;