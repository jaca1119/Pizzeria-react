import React from 'react';
import Addon from './Add_on';
import { Link } from 'react-router-dom';

function Ingridients(props) {
    return (
    <div>
        <div className="ingridients">
          {props.fetchedAddons.map(addon => <Addon key={addon.id} info={addon} onChange={props.onChange}/>)}
        </div>
        <div className="btn">

            <Link to={{
                pathname: "/order",
                state: {data: props.addons}
            }}>
              <button className="button">Order!</button>
            </Link>
            
        </div>
    </div>
    );
}

export default Ingridients;