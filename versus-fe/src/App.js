import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';

import { withCookies, Cookies } from 'react-cookie';

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
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  componentDidMount() {
    if (!this.props.user.user_id) {
      const { cookies } = this.props;
      const user_id = cookies.get('versus');
      if (user_id) this.props.getUserInfo(user_id);
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user.user_id && this.props.user.user_id) {
      const { cookies } = this.props;
      if (cookies.get('versus') === undefined) {
        cookies.set('versus', this.props.user.user_id);
      }
    }
  }

  removeCookie = () => {
    const { cookies } = this.props;
    cookies.remove('versus');
  };

  myDrawer = () => <Drawer removeCookie={this.removeCookie} />;

  render() {
    if (!this.props.cookies.get('versus')) return <LoginPage />;
    if (this.props.error) return <ErrorPage />;
    else if (this.props.loading && !this.props.user.user_id) return <Loading />;
    else
      return (
        <div className="App">
          <Route path="/" render={this.myDrawer} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/Matches" component={Matches} />
          <Route exact path="/" component={ProfilePage} />
          <Route path="/sportsList" component={SportsList} />
          <Route path="/league/:id" component={League} />
          <Route path="/match/:league/:opponent" component={MatchOne} />
          <Route path="/opponents" component={MatchingCardsList} />
          <Route
            path="/matchDetails/:match_id/:league_id/:user_id"
            component={MatchDetails}
          />
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
  getUserInfo: user_id =>
    dispatch(getUserInfo({ endpoint: `/users/${user_id}` }))
});

export default withCookies(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
