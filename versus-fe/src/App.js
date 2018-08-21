import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './containers/LoginPage/LoginPage';
import SignUp from './containers/SignUp/SignUp';
import Matches from './containers/Matches/Matches';
import ProfilePage from './containers/ProfilePage/ProfilePage';
import SportsList from './containers/SportsList/SportsList';
import League from './containers/League/League';
import MatchingCardsList from './containers/MatchingCardsList/MatchingCardsList';
import MatchOne from './containers/MatchOne/MatchOne';
import MatchDetails from './containers/MatchDetails/MatchDetails';

import ErrorPage from './components/ErrorPage/ErrorPage';
import Loading from './components/LoadingPage/LoadingPage';
import { getUserInfo } from './redux/actions';
import Drawer from './components/Drawer/Drawer';

class App extends Component {
  componentDidMount() {
    if (!this.props.user.user_id) this.props.getUserInfo();
  }

  render() {
    // if (this.props.error) return <ErrorPage />;
    // else if (this.props.loading && !this.props.user.user_id) return <Loading />;
    // else
    return (
      <div className="App">
        <Route path="/" component={Drawer} />
        <Route exact path="/" component={LoginPage} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/myMatches" component={Matches} />
        <Route path="/myProfile" component={ProfilePage} />
        <Route path="/sportsList" component={SportsList} />
        <Route path="/league/:id" component={League} />
        <Route path="/match/:league/:opponent" component={MatchOne} />
        <Route path="/opponents" component={MatchingCardsList} />
        <Route path="/matchDetails/:id" component={MatchDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo({ endpoint: '/users/3' }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
