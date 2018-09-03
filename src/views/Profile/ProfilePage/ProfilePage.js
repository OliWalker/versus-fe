import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux';
import ProfileSportScore from '..//ProfileSportScore/ProfileSportScore';

import { XAxis, Tooltip, AreaChart, Area } from 'recharts';

export class ProfilePage extends Component {
  state = {
    data: this.props.user.elo_history
  };

  toggleGraph = sport => {
    this.setState({
      data: sport
    });
  };

  renderScore = () => {
    if (this.props.stats.length < 1) return;
    const scoreList = this.props.stats.map(stat => stat.data.current_elo);
    const score = scoreList.reduce((a, b) => a + b, 0);
    const scoreForPage = Math.ceil(score / scoreList.length);
    return scoreForPage;
  };

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
        <span
          className="ProfilePage__score"
          onClick={() => this.toggleGraph(this.props.user.elo_history)}
        >
          <i>{this.renderScore()}</i>
        </span>
        <small className="Profile__small">City Avg</small>

        <div className="ProfilePage__all__scores">
          {stats.map(sport => {
            return (
              <ProfileSportScore
                key={sport.league_id}
                sport={sport}
                onClick={() => this.toggleGraph(sport.elo_history)}
              />
            );
          })}
        </div>

        <div className="ProfilePage__stats">
          <AreaChart width={400} height={200} data={this.state.data}>
            <XAxis dataKey="date" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="score"
              stoke="#8884d8"
              strokeWidth={3}
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  laoding: state.loading,
  user: state.user,
  stats: state.stats
});

export default connect(mapStateToProps)(ProfilePage);
