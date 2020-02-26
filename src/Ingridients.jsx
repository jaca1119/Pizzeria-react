import React from 'react';
import Addon from './Add_on';

function Ingridients(props) {
    return (
    <div>
        <div className="ingridients">
          {props.fetchedAddons.map(addon => <Addon key={addon.id} info={addon} onChange={props.onChange}/>)}
        </div>
    </div>
    );
}

export default Ingridients;