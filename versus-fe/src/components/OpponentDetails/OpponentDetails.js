import React, { Component } from 'react';
import { XAxis, Tooltip, AreaChart, Area } from 'recharts';
import PastMatchCard from '../PastMatchCard/PastMatchCard';
import './OpponentDetails.css';

class OpponentDetails extends Component {
  state = {
    buttonClass: true
  };

  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history;
    return previousMatches.map(previousMatch => (
      <PastMatchCard pastMatch={previousMatch} />
    ));
  };

  toggleButton = () => {
    this.setState({ buttonClass: !this.state.buttonClass });
  };

  render() {
    const data = this.props.theOpponent.match_history.map((match, i) => {
      return { i: i, score: match.elo };
    });
    const highScore = data.slice(0).sort((a, b) => b.score - a.score)[0].score;
    console.log(this.props);
    return (
      <div className="opponentContainer">
        <div className="opponentProfile">
          <img
            className="opponentPhoto"
            src={this.props.theOpponent.image_path}
            alt="the beautiful"
          />
          {this.props.theOpponent.username}
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
                <span>12</span>
              </div>
              <div className="opponentPastGames__One__Stat">
                <span>Drawn</span> <span>3</span>
              </div>
              <div className="opponentPastGames__One__Stat">
                <span>Lost</span> <span>10</span>
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
