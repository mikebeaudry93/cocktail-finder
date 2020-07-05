import React, { Component } from 'react'
import { connect } from 'react-redux';

import './ItemPage.scss'

import { loadItem, addItemToFav, deleteItem } from '../../redux/item/item.actions';



class ItemPage extends Component {
  constructor() {
    super()

      this.state = {
        itemAdded: false
      }
    }

  handleClick = () => {
      const { drinkItem, addItemToFav } = this.props

      addItemToFav(drinkItem);

  }

 
  componentDidMount() {
      const drinkId = this.props.match.params.drinkId

      const { loadItem } = this.props;

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
    
    return (
      <div className='item-page'>

        <img className='item-page-img' src={drinkItem.strDrinkThumb} alt="selected drink"/>
        <div className="item-page-content">
          <div className="box-title">
            <h3 className="item-page-title">{drinkItem.strDrink}</h3>
            {
              itemMatched ?  <button value='submit' onClick={() => deleteItem(drinkItem)} className='btn btn-has far fa-thumbs-up'></button> : <button value='submit' onClick={() => this.handleClick()} className='btn'>Add to favorites</button> 
            }
          </div>
          <div className="c-g-i-container">
            <div className="category-glass-container">
              <div className="section1-container">
                <p className='label'>Category</p>
                <p className="category">{drinkItem.strCategory}</p>
              </div>
              <div className="section1-container">
                <p className='label'>Type of glass</p>
                <p className="glass">{drinkItem.strGlass}</p>
              </div>
            </div>
            <div className="instructions">
              <p className='label'>Instructions</p>
              <p className="intructions">{drinkItem.strInstructions}</p>
            </div>
          </div>
          <p className="label label-ingredients">Ingredients</p>
          <div className="ingredients-container">
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient1}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure1}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient2}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure2}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient3}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure3}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient4}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure4}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient5}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure5}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient6}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure6}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient7}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure7}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient8}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure8}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient9}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure9}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient10}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure10}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient11}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure11}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient12}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure12}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient13}</span>
              <br></br>
              <span className="amount">{drinkItem.strMeasure13}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient14}</span>
              <span className="amount">{drinkItem.strMeasure14}</span>
            </div>
            <div className="measurements">
              <span className="ingredient">{drinkItem.strIngredient15}</span>
              <span className="amount">{drinkItem.strMeasure15}</span>
            </div>
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
