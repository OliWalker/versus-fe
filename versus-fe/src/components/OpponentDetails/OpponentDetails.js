import React, { Component } from 'react';
import PastMatchCard from '../PastMatchCard/PastMatchCard';
import './OpponentDetails.css';

class OpponentDetails extends Component {
  state = {
    buttonClass1: 'active',
    buttonClass2: ''
  };

  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history;
    return previousMatches.map(previousMatch => (
      <PastMatchCard pastMatch={previousMatch} />
    ));
  };

  toggleButton = e => {
    console.log(e.target.name);
    this.state[e.target.name] === ''
      ? this.setState({ [e.target.name]: 'active' })
      : this.setState({ [e.target.name]: '' });
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
            className={this.state.buttonClass1}
            onClick={this.toggleButton}
            name="buttonClass1"
          >
            Match History
          </button>
          <button
            className={this.state.buttonClass2}
            onClick={this.toggleButton}
            name="buttonClass2"
          >
            Performance
          </button>
        </div>
        <div className="opponentPastGames">{this.renderMatch_history()}</div>
      </div>
    );
  }
}

export default OpponentDetails;
