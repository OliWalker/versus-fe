import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip, AreaChart, Area } from 'recharts';
import PastMatchCard from '../PastMatchCard/PastMatchCard';
import './OpponentDetails.css';

class OpponentDetails extends Component {
  static propTypes = {
    user: PropTypes.object,
    theOpponent: PropTypes.object
  };

  state = {
    buttonClass: true
  };

  match_history = {
    match_history: [
      {
        result: 'won',
        score: '3-1',
        elo: 1000
      },
      {
        result: 'won',
        score: '3-2',
        elo: 1100
      },
      {
        result: 'won',
        score: '4-2',
        elo: 1300
      },
      {
        result: 'draw',
        score: '2-2',
        elo: 1350
      },
      {
        result: 'lost',
        score: '1-5',
        elo: 1250
      },
      {
        result: 'won',
        score: '6-1',
        elo: 1500
      },
      {
        result: 'lost',
        score: '1-3',
        elo: 1450
      }
    ]
  };

  elo_history = [
    { date: 1, score: 1200 },
    { date: 2, score: 1400 },
    { date: 3, score: 1350 },
    { date: 4, score: 1200 },
    { date: 5, score: 1150 },
    { date: 6, score: 1000 },
    { date: 7, score: 1400 },
    { date: 8, score: 1450 }
  ];

  renderMatch_history = () => {
    const previousMatches =
      this.props.user.user_id === 31
        ? this.match_history.match_history
        : this.props.theOpponent.match_history;
    return previousMatches.length > 0 ? (
      previousMatches.map((previousMatch, i) => (
        <PastMatchCard pastMatch={previousMatch} key={i} />
      ))
    ) : (
      <div>no match history</div>
    );
  };

  toggleButton = () => {
    this.setState({ buttonClass: !this.state.buttonClass });
  };

  render() {
    const { theOpponent } = this.props;
    const data = this.match_history.match_history.map((match, i) => {
      return { i: i, score: match.elo };
    });
    const highScore =
      data.length > 1
        ? data.slice(0).sort((a, b) => b.score - a.score)[0].score
        : theOpponent.score;
    return (
      <div className="opponentContainer">
        <div className="opponentProfile">
          <img
            className="opponentPhoto"
            src={theOpponent.image_path}
            alt="the beautiful"
          />
          {theOpponent.username}
        </div>
        <div className="Opponent__Details__buttons">
          <button
            className={this.state.buttonClass ? 'active' : null}
            onClick={this.toggleButton}
            name="buttonClass1"
          >
            Match History
          </button>
          <button
            className={this.state.buttonClass ? null : 'active'}
            onClick={this.toggleButton}
            name="buttonClass2"
          >
            Performance
          </button>
        </div>
        {this.state.buttonClass ? (
          <div className="opponentPastGames">{this.renderMatch_history()}</div>
        ) : (
          <div className="opponentPastGames">
            <div className="opponentPastGames__Stats">
              <div className="opponentPastGames__One__Stat">
                <span>Won</span>
                <span>{theOpponent.matches_won}</span>
              </div>
              <div className="opponentPastGames__One__Stat">
                <span>Drawn</span>
                <span>4</span>
              </div>
              <div className="opponentPastGames__One__Stat">
                <span>Lost</span> <span>{theOpponent.matches_lost}</span>
              </div>
            </div>
            <div className="opponentPastGames__highScore">
              <span>Highest Score</span>
              <span> {highScore} </span>
            </div>
            <div className="opponentPastGames__Graph">
              <AreaChart width={350} height={200} data={data}>
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
        )}
      </div>
    );
  }
}

export default OpponentDetails;
