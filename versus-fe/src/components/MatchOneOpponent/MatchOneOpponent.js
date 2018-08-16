import React, { Component } from 'react';
import './MatchOneOpponent.css';


export default class MatchOneOpponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: ''
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
          <div>
            <h2> {this.props.opponent.username} </h2>
            <h1> {this.props.opponent.score} </h1>
          </div>
        ) : null}

        <div
          className={`MatchOneOpponent flip-container ${this.state.hover}`}
          ontouchstart={this.handleFlip}
        >
          <div className="MatchOneOpponent__picture flipper">
            {this.props.opponent ? (
              <img
                src={this.props.opponent.image_path}
                alt="opponent"
                className="front"
              />
            ) : (
              <img
                src={this.props.user.image_path}
                alt="user"
                className="front"
              />
            )}

            <div className="MatchOneOppenent__specs back">
              <div className="MatchOneOpponent__wonlost">
                <span>won</span>
                <span>lost</span>
              </div>
              <div className="MatchOneOpponent__score">
                {this.props.opponent ? (
                  <span>{this.props.opponent.matches_won}</span>
                ) : (
                  <span>13</span>
                )}
                {this.props.opponent ? (
                  <span>{this.props.opponent.matches_lost}</span>
                ) : (
                  <span>9</span>
                )}
              </div>
              <div className="MatchOneOpponent__graph">
                <img src="./graph.png" alt="stat graph" />
              </div>
            </div>
          </div>
        </div>

        {this.props.user ? (
          <div>
            <h2> {this.props.user.username} </h2>
            <h1> {this.props.user.total_score} </h1>
          </div>
        ) : null}
      </div>
    );
  }
}
