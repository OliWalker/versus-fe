import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LoginPage from './containers/LoginPage/LoginPage'
import SignUp from './containers/SignUp/SignUp'
import ProfilePage from './containers/ProfilePage/ProfilePage';
import Header from './components/Header/Header';
import SportsList from './containers/SportsList/SportsList';
import League from './containers/League/League';
import MatchingCardsList from './containers/MatchingCardsList/MatchingCardsList';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Route path='/' component={Header} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/sportsList' component={SportsList} />
        <Route path='/league' component={League} />
        <Route path='/opponents' component={MatchingCardsList} />
        <Route path='/LoginPage' component={LoginPage} />
        <Route path='/SignUp' component={SignUp} />


      </div>
    );
  }
}

export default App;
