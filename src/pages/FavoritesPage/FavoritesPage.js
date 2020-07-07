import React, { Component } from 'react';
import { connect } from 'react-redux';

import FavoritesCard from '../../components/FavoritesCard/FavoritesCard'

import './FavoritesPage.scss'

class FavoritesPage extends Component {
    constructor() {
        super()

        this.state = {
            filterField: '',
        }
    }

    handleChange = e => {
        this.setState({ filterField: e.target.value })
    }

    render() {
       const { drinkFavorites } = this.props
    return (
        <div className='f-page'>
        <input onChange={this.handleChange} className='input filter-f' type="text" placeholder="Filter favorites..."/> 
            {   drinkFavorites.length > 0 ? 
                drinkFavorites.filter(item => item.strDrink.toLowerCase().includes(this.state.filterField.toLowerCase()))
                .map((item, i)=> 
                    <FavoritesCard key={i} item={item} />
                ) : <div className="no-items">Add items to favorites</div>
            }
        </div>
    )}
}

const mapStateToProps = ({ item }) => ({
    drinkFavorites: item.drinkFavorites
})



export default connect(mapStateToProps)(FavoritesPage)
