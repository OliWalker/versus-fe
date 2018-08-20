import React, { Component } from 'react';
import './PastMatchCard.css'

class PastMatchCard extends Component {

  render() {
    return (
      <div>
        <div className="cardPastMatch">
          <div className="result">
            {this.props.pastMatch.result}
          </div>
          <div className="score">
            {this.props.pastMatch.score}
          </div>
          <div className="elo">
            {this.props.pastMatch.elo}
          </div>
        </div>
      </div>
    );
  }

}

export default PastMatchCard;
