import React from 'react';
import { Link } from 'react-router-dom';

import './DrinkContainer.scss';

import DrinkCard from '../DrinkCard/DrinkCard';

function DrinkContainer(props) {

    return (
        <div className='cocktails-container'>
        {
            props.drinks.map((item, i) => {
              return <Link key={i} to={`drink/${item.idDrink}`}><DrinkCard item={item}/></Link>
            })
        }
        </div>
    )
}

export default DrinkContainer
