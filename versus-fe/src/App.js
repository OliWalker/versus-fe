import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import ProfilePage from './containers/ProfilePage/ProfilePage';
import SportsList from './containers/SportsList/SportsList';
import League from './containers/League/League';
import MatchingCardsList from './containers/MatchingCardsList/MatchingCardsList';
import MatchOne from './containers/MatchOne/MatchOne';
import Drawer from './components/Drawer/Drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Drawer} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/sportsList" component={SportsList} />
        <Route path="/league/:id" component={League} />
        <Route path="/match" component={MatchOne} />
        <Route path="/opponents" component={MatchingCardsList} />
      </div>
    );
  }
}

export default App;
