import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux';
import ProfileSportScore from '../../components/ProfileSportScore/ProfileSportScore';

export class ProfilePage extends Component {
  render() {
    const { user, stats } = this.props;

    return (
      <div className="ProfilePage">
        <div className="ProfilePage__picture">
          <img alt="random Dude" src={user.image_path} />
        </div>

        <span className="ProfilePage__name">
          {user.first_name} {user.last_name}
        </span>
        <span className="ProfilePage__score">
          <i>{user.total_score}</i>
        </span>

        <div className="ProfilePage__all__scores">
          {stats.map(sport => {
            return (
              <ProfileSportScore
                key={sport.league_id}
                title={sport.name}
                score={sport.data.score}
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

const mapStateToProps = state => ({
  user: state.user,
  stats: state.stats
});

export default connect(mapStateToProps)(ProfilePage);
