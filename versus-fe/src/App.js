import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ProfilePage from './containers/ProfilePage/ProfilePage';
import Header from './components/Header/Header';
import SportsList from './containers/SportsList/SportsList';
import League from './containers/League/League';
import MatchingCardsList from './containers/MatchingCardsList/MatchingCardsList';
import MatchOne from './containers/MatchOne/MatchOne';
import ErrorPage from './components/ErrorPage/ErrorPage';

class App extends Component {
  render() {
    if (this.props.error) return <ErrorPage />;
    else
      return (
        <div className="App">
          <Route path="/" component={Header} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/sportsList" component={SportsList} />
          <Route path="/league" component={League} />
          <Route path="/match" component={MatchOne} />
          <Route path="/opponents" component={MatchingCardsList} />
        </div>
      );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

export default withRouter(connect(mapStateToProps)(App));

// export default App;
