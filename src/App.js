import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { getUserInfo, sendError } from './redux/actions';

import LoginPage from './views/Login/LoginPage/LoginPage';
import SignUp from './views/Login/SignUp/SignUp';
import ProfilePage from './views/Profile/ProfilePage/ProfilePage';
import SportsList from './views/SportsList/SportsList/SportsList';
import League from './views/LeagueList/League/League';
import MatchOne from './views/MatchingOneOpp/MatchOne/MatchOne';
import Matches from './views/MyMatches/Matches/Matches';
import MatchDetails from './views/MyMatches/MatchDetails/MatchDetails';
import ErrorPage from './views/Misc/ErrorPage/ErrorPage';
import Loading from './views/Misc/LoadingPage/LoadingPage';
import Drawer from './views/Misc/Drawer/Drawer';
import Resize from './views/Misc/Resizer/Resize';

class App extends Component {
  static propTypes = {
    error: PropTypes.bool,
    sendError: PropTypes.func,
    loading: PropTypes.bool,
    user: PropTypes.object,
    cookies: instanceOf(Cookies).isRequired
  };

  state = {
    resize: false
  };

  componentDidMount() {
    this.sizeChecker();
    window.addEventListener('resize', () => this.sizeChecker());
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  componentDidCatch(error, info) {
    alert(error, info);
    this.props.sendError();
  }

  sizeChecker = () => {
    if (window.innerWidth > 700) this.setState({ resize: true });
    else this.setState({ resize: false });
  };

  render() {
    if (this.state.resize) return <Resize />;
    if (!this.props.user.user_id) return <LoginPage />;
    if (this.props.error) return <ErrorPage />;
    else if (this.props.loading && !this.props.user.user_id) return <Loading />;
    else
      return (
        <div className="App">
          <Route path="/" component={Drawer} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/Matches" component={Matches} />
          <Route exact path="/" component={ProfilePage} />
          <Route path="/sportsList" component={SportsList} />
          <Route path="/league/:id" component={League} />
          <Route path="/match/:league/:opponent" component={MatchOne} />
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
  sendError: () => dispatch(sendError()),
  getUserInfo: user_id =>
    // dispatch(getUserInfo({ endpoint: `/users/${user_id}` }))
    dispatch(getUserInfo({ endpoint: `/users/1` }))
});

export default withCookies(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
);
