import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux';
import ProfileSportScore from '../../components/ProfileSportScore/ProfileSportScore';

import { XAxis, Tooltip, AreaChart, Area } from 'recharts';

class ProfilePage extends Component {
  state = {
    data: this.props.user.elo_history
  };

  toggleGraph = sport => {
    this.setState({
      data: sport
    });
  };

  allProfileScores = () => {
    return [
      { date: 1, score: 1000 },
      { date: 2, score: 950 },
      { date: 3, score: 975 },
      { date: 4, score: 1000 },
      { date: 5, score: 1100 },
      { date: 6, score: 1150 },
      { date: 7, score: 1200 },
      { date: 8, score: 1350 }
    ];
  };

  renderScore = () => {
    const scoreList = this.props.stats.map(stat => stat.data.current_elo);
    const score = scoreList.reduce((a, b) => a + b, 0);
    const scoreForPage = Math.ceil(score / scoreList.length);
    return scoreForPage;
  };

  render() {
    console.log(this.allProfileScores());
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
        <small>City Avg</small>

        <div className="ProfilePage__all__scores">
          {stats.map(sport => {
            return (
              <ProfileSportScore
                key={sport.league_id}
                sport={sport}
                onClick={() => this.toggleGraph(sport.data.elo_history)}
              />
            );
          })}
        </div>

        <div className="ProfilePage__stats">
          <AreaChart width={400} height={200} data={this.allProfileScores()}>
            <XAxis dataKey="date" padding={{ bottom: -150 }} />
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
  user: state.user,
  stats: state.stats
});

export default connect(mapStateToProps)(ProfilePage);
