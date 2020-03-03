import React from 'react';
import Addon from './Add_on';

function Ingredients(props) {
    return (
    <div>
        <div className="ingredients">
          {props.fetchedAddons.map(addon => <Addon key={addon.id} info={addon} onChange={props.onChange}/>)}
        </div>
    </div>
    );
}

export default Ingredients;