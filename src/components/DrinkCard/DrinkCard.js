import React from 'react'

import './DrinkCard.scss'

function DrinkCard({ item: { strDrink, strCategory, strAlcoholic, strGlass, strIBA, strDrinkThumb } }) {
    // console.log(props)
    return (
        <div className="card">
            <img className='img' src={strDrinkThumb} alt="drink"/>
            <div className='content-box'>
                <h3 className='name'>{strDrink}</h3>
                <div className='content-p'>
                    <p className='content'>{strCategory}</p>
                    <p className='content'>{strAlcoholic}</p>
                    <p className='content'>{strGlass}</p>
                    <p className='content'>{strIBA}</p>
                </div>
            </div>
          </div>
    )
}

export default DrinkCard
