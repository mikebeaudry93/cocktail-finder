import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './FavoritesCard.scss'

import { deleteItem } from '../../redux/item/item.actions'

function FavoritesCard({ item, deleteItem }) {
    
    return (
        
        <div className="card f-card">
            <Link className="link" to={`drink/${item.idDrink}`}>
                <img className="f-image"src={item.strDrinkThumb} alt="drink type"/>
                <div className="card-content"> 
                    <h2 className="title">{item.strDrink}</h2>
                    <p className="description">{item.strInstructions}</p>
                </div>
            </Link>
            <div className='remove-box'>
                <div onClick={() => deleteItem(item)} className='remove-icon far fa-trash-alt'></div>
            </div>
        </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItem(item))
});

export default connect(null, mapDispatchToProps)(FavoritesCard)
