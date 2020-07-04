import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ItemPage from './pages/ItemPage/ItemPage';

import './App.scss'

class App extends Component {


  render() {
   
    return (
      <Router>
        <div className="nav">
          <div className="logo">Logo</div>
          <div className="nav-links">
            <div className="home link-item">Home</div>
            <div className="favourites link-item">Favorites</div>
          </div>
        </div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/drink/:drinkId' render={props => (<ItemPage {...props} />)}/>
        </Switch>
      </Router>
    )
  }
}

export default App

