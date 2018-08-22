import React, { Component } from 'react';
import { Tooltip, AreaChart, Area } from 'recharts';
import PastMatchCard from '../PastMatchCard/PastMatchCard';
import './OpponentDetails.css';

class OpponentDetails extends Component {
  state = {
    buttonClass: true
  };

  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history;
    return previousMatches.length > 0 ? (
      previousMatches.map(previousMatch => (
        <PastMatchCard pastMatch={previousMatch} key={previousMatch.match_id} />
      ))
    ) : (
      <div>no match history</div>
    );
  };

  toggleButton = () => {
    this.setState({ buttonClass: !this.state.buttonClass });
  };

  render() {
    console.log(this.props);
    const { theOpponent } = this.props;
    const data = theOpponent.match_history.map((match, i) => {
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
                <span>
                  {theOpponent.match_history.length -
                    (theOpponent.matches_won + theOpponent.matches_lost)}
                </span>
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
