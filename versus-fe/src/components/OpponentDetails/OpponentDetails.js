import React, { Component } from 'react';
import PastMatchCard from '../PastMatchCard/PastMatchCard';
import './OpponentDetails.css';

class OpponentDetails extends Component {
  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history;
    return previousMatches.map(previousMatch => (
      <PastMatchCard pastMatch={previousMatch} />
    ));
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
          <button> Match History </button>
          <button> Performance </button>
        </div>
        <div className="opponentPastGames">{this.renderMatch_history()}</div>
      </div>
    );
  }
}

export default OpponentDetails;
