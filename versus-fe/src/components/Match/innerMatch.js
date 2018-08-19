import React from 'react';

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
          onClick={props.innerFunction.reject}
        >
          decline
        </button>
      </div>
    );
  },

  waiting: () => {
    return (
      <div className="MatchContainer__Content__waiting">
        <h2>
          <i>waiting...</i>
        </h2>
      </div>
    );
  },

  denied: props => {
    console.log(props);
    return (
      <div
        className="MatchContainer__Content__denied"
        onClick={props.innerFunction}
      >
        <h2>
          <i>denied</i>
        </h2>
      </div>
    );
  },

  accepted: () => {
    return (
      <div className="MatchContainer__Content__accepted">
        <div className="MatchContainer__Content__date">
          <span>7th Spt</span>
          <span>18:00 hr</span>
        </div>
        <h5> location </h5>
      </div>
    );
  }
};
