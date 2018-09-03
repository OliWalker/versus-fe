import React, { Component } from 'react';
import './MatchOneOpponent.css';

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
    let score, realScore;
    if (this.props.stats) {
      score = this.props.stats.filter(
        stat => stat.league_id === Number(this.props.league)
      );
      if (score.length > 0) realScore = score[0].data.current_elo;
    }
    console.log(this.props.user);
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
            <h2> {this.props.user.username || 'you'}</h2>
            <h1> {realScore} </h1>
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
