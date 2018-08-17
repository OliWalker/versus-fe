import React from 'react';

export default {
  finished: (user1, user2) => {
    return (
      <div className="MatchContainer__Content__result">
        <span>
          <b>{user1.score}</b> / {user2.score}
        </span>
        <i> + 30 points! </i>
      </div>
    );
  },

  choices: () => {
    return (
      <div>
        <button className="MatchContainer__Content__accept"> accept </button>
        <button className="MatchContainer__Content__decline"> decline </button>
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

  denied: () => {
    return (
      <div className="MatchContainer__Content__denied">
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
