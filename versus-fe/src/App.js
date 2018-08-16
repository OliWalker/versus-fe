import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from './containers/LoginPage/LoginPage'
import SignUp from './containers/SignUp/SignUp'
import ProfilePage from './containers/ProfilePage/ProfilePage';
import SportsList from './containers/SportsList/SportsList';
import League from './containers/League/League';
import MatchingCardsList from './containers/MatchingCardsList/MatchingCardsList';
import MatchOne from './containers/MatchOne/MatchOne';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Loading from './components/LoadingPage/LoadingPage';
import { getUserInfo } from './redux/actions';
import Drawer from './components/Drawer/Drawer';


class App extends Component {

  constructor(props) {
    super(props);
    if (!this.props.user.user_id) this.props.getUserInfo();
  }
  render() {
    
    if (this.props.error) return <ErrorPage />;
    else if (this.props.loading && this.props.user.user_id === undefined)
      return <Loading />;
    else
      return (
        <div className="App">
          <Route path="/" component={Drawer} />
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
  error: state.error,
  loading: state.loading,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo({ endpoint: '/users/1' }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
