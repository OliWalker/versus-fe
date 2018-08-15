import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';

const toggleOpen = e => {};

export default function SportCard(props) {
  console.log(props);
  return (
    <div onClick={toggleOpen}>
      <div className="SportCard SportCard__open">
        <h2> {props.sport.name} </h2>
      </div>

      <div className="SportCard__buttons SportCard__buttons__closed">
        <Link to={`/league/${props.sport.league_id}`}>
          <button className="SportCard__button"> See League </button>
        </Link>

        <button className="SportCard__button"> Find Match </button>
      </div>
    </div>
  );
}
