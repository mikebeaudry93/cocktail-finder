import React, { Component } from 'react'

import DrinkContainer from '../../components/DrinkContainer/DrinkContainer'

import './Homepage.scss'

class Homepage extends Component {
    constructor() {
        super()
    
        this.state = {
          displayCocktails: [],
          searchField: '',
        }
      }
    
      handleChange = e => {
        this.setState({searchField: e.target.value})
      }
    
      componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => this.setState({
          displayCocktails: data.drinks
        }));
        
      }

render() {

    const { displayCocktails, searchField } = this.state

     const filteredDrinks = displayCocktails.filter(item => 
      item.strDrink.toLowerCase().includes(searchField.toLowerCase())
     )

    return (
        <div className="home">
            <div className="filter-title-box">
                <h1 className="title">The A-list Cocktail Menu</h1>
                <input type="text" placeholder="Filter drinks..." className="input filter" onChange={this.handleChange}/>
            </div>
            <div className="cocktails-container">
                <DrinkContainer drinks={filteredDrinks} />
            </div>
         </div>
        )
    } 
}

export default Homepage

