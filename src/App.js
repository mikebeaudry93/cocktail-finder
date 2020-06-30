import React, { Component } from 'react'

import './App.scss'

class App extends Component {
  constructor() {
    super()

    this.state = {
      displayCocktails: []
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="home">
        <div className="nav">
          <div className="logo">Logo</div>
          <div className="nav-links">
            <div className="home link-item">Home</div>
            <div className="favourites link-item">Favorites</div>
          </div>
        </div>
        <div className="filter-title-box">
          <h1 className="title">Cocktail Finder</h1>
          <input type="text" placeholder="filter drinks" className="filter"/>
        </div>
        <div className="cocktails-container">
          <div className="card">
            <div>Image</div>
            <div>Drink Name</div>
            <div>Drink Info</div>
          </div>
          <div className="card">
            <div>Image</div>
            <div>Drink Name</div>
            <div>Drink Info</div>
          </div>
          <div className="card">
            <div>Image</div>
            <div>Drink Name</div>
            <div>Drink Info</div>
          </div>
          <div className="card">
            <div>Image</div>
            <div>Drink Name</div>
            <div>Drink Info</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

