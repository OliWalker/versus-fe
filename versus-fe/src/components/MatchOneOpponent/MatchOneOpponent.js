import React, { Component } from 'react';
import './MatchOneOpponent.css';
import { AreaChart, Area, XAxis } from 'recharts';
import Loading from '../LoadingPage/LoadingPage';

export default class MatchOneOpponent extends Component {
  constructor(props) {
    super(props);
    let stats, sport;
    if (this.props.opponent)
      stats = this.props.opponent.match_history.map((stat, i) => {
        return { date: i + 1, score: stat.elo };
      });
    else if (this.props.stats) {
      sport = this.props.stats.filter(
        stat => stat.league_id === Number(this.props.league)
      );
      stats = sport.map(el => el.elo_history);
      console.log('stats', stats);
    }
    this.state = {
      hover: '',
      stats,
      sport
    };
  }

  handleFlip = () => {
    const hover = this.state.hover === '' ? 'hover' : '';
    this.setState({ hover });
  };

  render() {
    return (
      <div className="MatchOneOpponent">
        {this.props.opponent ? (
          <div className="MatchOneOpponent__info">
            <h2> {this.props.opponent.username} </h2>
            <h1> {this.props.opponent.score} </h1>
            <span> wins </span>
            <span> {this.props.opponent.matches_won} </span>
            <span> lost </span>
            <span> {this.props.opponent.matches_lost} </span>
          </div>
        ) : null}

        <div className="MatchOneOpponent__picture">
          {this.props.opponent ? (
            <img src={this.props.opponent.image_path} alt="opponent" />
          ) : (
            <img src={this.props.user.image_path} alt="user" />
          )}
        </div>

        {this.props.user ? (
          <div className="MatchOneOpponent__info">
            <h2> {this.props.user.username} </h2>
            <h1> {this.props.user.total_score} </h1>
            <span> wins </span>
            {this.state.sport.length > 0 ? (
              <div className="MatchOneOpponent__info__user">
                <span> {this.state.sport[0].data.matches_won} </span>
                <span> lost </span>
                <span> {this.state.sport[0].data.matches_lost} </span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

//  <div
//     className={`MatchOneOpponent flip-container ${this.state.hover}`}
//     onTouchStart={this.handleFlip}
//   >
//     <div className="MatchOneOpponent__picture flipper">

{
  /* <div className="MatchOneOpponent__graph">
                <AreaChart width={220} height={200} data={this.state.stats}>
                  <XAxis dataKey="date" padding={{ bottom: -150 }} />
                  <Area
                    type="monotone"
                    dataKey="score"
                    stoke="#8884d8"
                    strokeWidth={3}
                  />
                </AreaChart>
              </div> */
}
