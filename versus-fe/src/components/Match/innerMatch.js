import React from 'react';

export default {
  finished: (user1, user2) => {
    return (
      <div>
        <span className="Match__container__result">
          <b>{user1.score}</b> / {user2.score}
        </span>
        <i> + 30 points! </i>
      </div>
    );
  },

  choices: () => {
    return (
      <div>
        <button className="accept"> accept </button>
        <button className="decline"> decline </button>
      </div>
    );
  },

  waiting: () => {
    return (
      <div className="waiting">
        <h2>
          <i>waiting...</i>
        </h2>
      </div>
    );
  },

  denied: () => {
    return (
      <div className="denied">
        <h2>
          <i>denied</i>
        </h2>
      </div>
    );
  },

  accepted: () => {
    return (
      <div className="accepted">
        <div className="date">
          <span>7th Spt</span>
          <span>18:00 hr</span>
        </div>
        <h5> location </h5>
      </div>
    );
  }
};
