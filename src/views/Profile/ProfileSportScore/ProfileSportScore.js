import React from 'react';
import './ProfileSportScore.css';

export default function ProfileSportScore({ sport, ...props }) {
  return (
    <div className="ProfilePage__sport__score" {...props}>
      <span className="ProfilePage__sport__score__single">
        <i>{sport.data.current_elo}</i>
      </span>
      <span className="ProfilePage__sport__name__single">
        {sport.sport_name}
      </span>
    </div>
  );
}
