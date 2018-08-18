import React from 'react';
import './ProfileSportScore.css';

export default function ProfileSportScore(props) {
  const cliker = () => {
    return props.click(props.sport.elo_history);
  };
  return (
    <div className="ProfilePage__sport__score" onClick={cliker}>
      <span className="ProfilePage__sport__score__single">
        <i>{props.sport.data.score}</i>
      </span>
      <span className="ProfilePage__sport__name__single">
        {props.sport.name}
      </span>
    </div>
  );
}
