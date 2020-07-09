import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import Homepage from './pages/Homepage/Homepage';
import ItemPage from './pages/ItemPage/ItemPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'

import './App.scss'

class App extends Component {


  render() {
   
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/drink/:drinkId' render={props => (<ItemPage {...props} />)}/>
          <Route path='/favoritelist' component={FavoritesPage} />
        </Switch>
      </Router>
    )
  }
}

export default App

// Old nav bar
// <div className="logo">Logo</div>
// <div className="nav-links">
//   <Link className='nav-link' to="/"><div className="home link-item">Home</div></Link>
//   <Link className='nav-link' to='/favoritelist'><div className="favourites link-item">Favorites</div></Link>
// </div>

