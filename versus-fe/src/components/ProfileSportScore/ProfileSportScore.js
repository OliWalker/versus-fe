import React from 'react';
import './ProfileSportScore.css';

export default function ProfileSportScore(props) {
  return (
    <div className="ProfilePage__sport__score">
      <span className="ProfilePage__sport__score__single">
        <i>{props.score}</i>
      </span>
      <span className="ProfilePage__sport__name__single">{props.title}</span>
    </div>
  );
}
