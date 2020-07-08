import React, { Component } from 'react'
import { connect } from 'react-redux';

import './ItemPage.scss'

import { loadItem, addItemToFav, deleteItem } from '../../redux/item/item.actions';



class ItemPage extends Component {
  constructor() {
    super()

      this.state = {
        itemAdded: false,
      }
    }

  handleClick = () => {
      const { drinkItem, addItemToFav } = this.props

      addItemToFav(drinkItem);

  }

 
  componentDidMount() {
      const drinkId = this.props.match.params.drinkId

      const { loadItem, drinkItem } = this.props;

      console.log(drinkItem)

      fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then(res => res.json())
      .then(data => { loadItem ({
        ...data.drinks[0]
      })
    })

  }

  render() {
  
    const { drinkItem, drinkFavorites, deleteItem } = this.props

    const itemMatched = drinkFavorites.find(item => item.idDrink === drinkItem.idDrink)

    const newValuesArray = Object.values(drinkItem)
    const ingredientValues = newValuesArray.slice(21, 30)
    const amountValues = newValuesArray.slice(36, 45)

    return (
      <div className='item-page'>
        <img src={drinkItem.strDrinkThumb} alt="drink" className="item-image"/>
        <div className="content-container">
          <div className="title-container">
            <h1 className="drink-name">{drinkItem.strDrink}</h1>
            {
              itemMatched ?  <button value='submit' onClick={() => deleteItem(drinkItem)} className='btn btn-has far fa-thumbs-up'></button> : <button value='submit' onClick={() => this.handleClick()} className='btn'>Add to favorites</button> 
            }
          </div>
          <div className="inner-content-container">
            <div className="inner-left-content">
              <div className="category-container">
                <h3 className="category-title item-title">Category</h3>
                <div className="category-content">{drinkItem.strCategory}</div>
              </div>
              <div className="glass-type-container">
                <h3 className="glass-type-title item-title">Type of Glass</h3>
                <div className="glass-type-content">{drinkItem.strGlass}</div>
              </div>
            </div>
            <div className="inner-right-content">
              <h3 className="ingredients-title item-title">Ingredients</h3>
                <div className="ingredients-content">
                  {ingredientValues.map((ingredient, i) => 
                      <div className='ingredient' key={i}>
                        <div>{ingredient}</div>
                        <div className='amounts'>{amountValues[i]}</div>
                      </div>)}
                </div>
            </div>
          </div>
          <div className="description-box">
              <h3 className="description-title item-title">Instructions</h3>
              <div className="description-content">{drinkItem.strInstructions}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ item }) => ({
  drinkItem: item.drinkItem,
  drinkFavorites: item.drinkFavorites
});

const mapDispatchToProps = dispatch => ({
  loadItem: item => dispatch(loadItem(item)),
  addItemToFav: item => dispatch(addItemToFav(item)),
  deleteItem: item => dispatch(deleteItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)

// Message Alert with setState
// if(this.state.itemAdded === false) { 
//   this.setState(() => ({
//   itemAdded: !this.state.itemAdded
// })); 
//   setTimeout(function(){
//     this.setState({itemAdded: false});
//   }.bind(this),2000);
// }

// <div className="box-title">
// <h3 className="item-page-title">{drinkItem.strDrink}</h3>
// {
//   itemMatched ?  <button value='submit' onClick={() => deleteItem(drinkItem)} className='btn btn-has far fa-thumbs-up'></button> : <button value='submit' onClick={() => this.handleClick()} className='btn'>Add to favorites</button> 
// }
// </div>
