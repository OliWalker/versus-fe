import React, { Component } from 'react';
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
          <div className="opponentPastGames" />
        )}
      </div>
    );
  }
}

export default OpponentDetails;
