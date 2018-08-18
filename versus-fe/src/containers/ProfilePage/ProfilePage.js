import React, { Component } from 'react';
import './ProfilePage.css';

import { connect } from 'react-redux';
import ProfileSportScore from '../../components/ProfileSportScore/ProfileSportScore';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area
} from 'recharts';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.user.elo_history
    };
  }

  toggleGraph = sport => {
    if (sport)
      this.setState({
        data: sport
      });
    else
      this.setState({
        data: this.props.user.elo_history
      });
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
        <span className="ProfilePage__score" onClick={this.toggleGraph}>
          <i>{user.total_score}</i>
        </span>

        <div className="ProfilePage__all__scores">
          {stats.map(sport => {
            return (
              <ProfileSportScore
                key={sport.league_id}
                sport={sport}
                click={this.toggleGraph}
              />
            );
          })}
        </div>

        <div className="ProfilePage__stats">
          <AreaChart width={400} height={200} data={this.state.data}>
            <XAxis dataKey="date" padding={{ bottom: -150 }} />
            {/* <YAxis dataKey="score" padding={{ bottom: -150 }} /> */}
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
