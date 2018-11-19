import React from 'react';
import './LeagueCard.css';
import { Link } from 'react-router-dom';

export default function LeagueCard(props) {
  const thisClass =
    props.mainUser.user_id === props.user.user_id
      ? 'LeagueCard LeagueCard__user'
      : 'LeagueCard';
  return (
    <Link to={`/match/${props.league}/${props.user.user_id}`}>
      <div className={thisClass}>
        <div className="LeagueCard__score">
          <p>{props.i + 1}</p>
          <div className="LeagueCard__picture">
            <img src={props.user.image_path} alt="want to play?" />
          </div>
        </div>
        <h2 className="LeagueCard__name"> {props.user.username} </h2>
        <span className="LeagueCard__score"> {props.user.current_elo} </span>
      </div>
    </Link>
  );
}
