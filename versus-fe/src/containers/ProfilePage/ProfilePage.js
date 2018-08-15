import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/actions';
import ProfileSportScore from '../../components/ProfileSportScore/ProfileSportScore';
import Loading from '../../components/LoadingPage/LoadingPage';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.props.getUserInfo();
  }

  render() {
    const user = this.props.user;
    const stats = this.props.stats;
    const matches = this.props.matches;

    if (!stats[0]) return <Loading />;
    else {
      return (
        <div className="ProfilePage">
          <div className="ProfilePage__picture">
            <img alt="random Dude" src={user.image_path} />
          </div>

          <span className="ProfilePage__name">
            {' '}
            {user.first_name} {user.last_name}{' '}
          </span>
          <span className="ProfilePage__score">
            <i>{user.total_score}</i>
          </span>

          <div className="ProfilePage__all__scores">
            {stats.map(sport => {
              return (
                <ProfileSportScore
                  props={{ title: sport.name, score: sport.data.score }}
                />
              );
            })}
          </div>

          <div className="ProfilePage__stats">
            <img src="./graph.png" alt="stat graph" />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  stats: state.stats,
  matches: state.matches
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: () => dispatch(getUserInfo({ endpoint: '/users/1' }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
