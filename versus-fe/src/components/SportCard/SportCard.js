import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';

const toggleOpen = e => {
  let target;
  !e.target.classList.contains('SportCard__open')
    ? (target = e.target.parentNode.nextSibling)
    : (target = e.target.nextSibling);

  target.style.height === '100px'
    ? (target.style.height = '0px')
    : (target.style.height = '100px');
};

export default function SportCard(props) {
  console.log(props);
  return (
    <div>
      <div className="SportCard SportCard__open" onClick={toggleOpen}>
        <h2> {props.sport.name} </h2>
      </div>

      <div className="SportCard__buttons">
        {props.mine ? (
          <Link to={`/league/${props.sport.league_id}`}>
            <button className="SportCard__button"> See League </button>
          </Link>
        ) : (
          <Link to={`/league/${props.sport.league_id}`}>
            <button className="SportCard__button"> Join League </button>
          </Link>
        )}

        <button className="SportCard__button"> Find Match </button>
      </div>
    </div>
  );
}
