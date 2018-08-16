import React from 'react';
import './MatchOneOpponent.css';

export default function MatchOneOpponent(props) {
  const handleFlip = e => {
    e.target.classList.add('hover');
  };

  return (
    <div className="MatchOneOpponent">
      {props.opponent ? (
        <div>
          <h2> {props.opponent.username} </h2>
          <h1> {props.opponent.score} </h1>
        </div>
      ) : null}

      <div
        className="MatchOneOpponent flip-container"
        ontouchstart={handleFlip}
      >
        <div className="MatchOneOpponent__picture flipper">
          {props.opponent ? (
            <img
              src={props.opponent.image_path}
              alt="opponent"
              className="front"
            />
          ) : (
            <img src={props.user.image_path} alt="user" className="front" />
          )}

          <div className="MatchOneOppenent__specs back">
            <div className="MatchOneOpponent__wonlost">
              <span>won</span>
              <span>lost</span>
            </div>
            <div className="MatchOneOpponent__score">
              {props.opponent ? (
                <span>{props.opponent.matches_won}</span>
              ) : (
                <span>13</span>
              )}
              {props.opponent ? (
                <span>{props.opponent.matches_lost}</span>
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

      {props.user ? (
        <div>
          <h2> {props.user.username} </h2>
          <h1> {props.user.total_score} </h1>
        </div>
      ) : null}
    </div>
  );
}
