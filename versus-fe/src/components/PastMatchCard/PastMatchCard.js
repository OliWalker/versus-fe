import React, { Component } from 'react';
import './PastMatchCard.css';

class PastMatchCard extends Component {
  render() {
    return (
      <div className="cardPastMatch">
        <span>{this.props.pastMatch.result}</span>
        <span>{this.props.pastMatch.score}</span>
        <span>{this.props.pastMatch.elo}</span>
      </div>
    );
  }
}

export default PastMatchCard;
