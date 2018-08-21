import React from 'react';
import { Link } from 'react-router-dom';

export default {
  finished: props => {
    return (
      <div className="MatchContainer__Content__result">
        <span>
          <b>{props.user1.score}</b> / {props.user2.score}
        </span>
        <i> + 30 points! </i>
      </div>
    );
  },

  choices: props => {
    return (
      <div>
        <button
          className="MatchContainer__Content__accept"
          onClick={props.innerFunction.accept}
        >
          accept
        </button>
        <button
          className="MatchContainer__Content__decline"
          onClick={props.innerFunction.decline}
        >
          decline
        </button>
      </div>
    );
  },

  waiting: props => {
    return (
      <Link
        className="MatchContainer__Content__waiting"
        to={`/matchdetails/${props.league_id}/${props.opponent_id}`}
      >
        <h2>
          <i>waiting...</i>
        </h2>
      </Link>
    );
  },

  denied: props => {
    return (
      <div className="MatchContainer__Content__denied">
        <div className="MatchContainer__Content__denied__banner">
          <h2>
            <i>canceled</i>
          </h2>
        </div>
        <i className="fas fa-trash-alt" onClick={props.innerFunction} />
      </div>
    );
  },

  accepted: props => {
    return (
      <Link
        className="MatchContainer__Content__accepted"
        to={`/matchdetails/${props.league_id}/${props.opponent_id}`}
      >
        <div className="MatchContainer__Content__date">
          <span>7th Spt</span>
          <span>18:00 hr</span>
        </div>
        <h5> location </h5>
      </Link>
    );
  }
};
