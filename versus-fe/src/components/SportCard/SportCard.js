import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';

const toggleOpen = e => {
  let target;
  e.target.classList.contains('SportCard__open')
    ? (target = e.target.nextSibling)
    : (target = e.target.parentNode.nextSibling);

  target.style.height === '100px'
    ? (target.style.height = '0px')
    : (target.style.height = '100px');
};

export default function SportCard(props) {
  return (
    <div onClick={toggleOpen}>
      <div className="SportCard SportCard__open">
        <h2> {props.sport.name} </h2>
      </div>

      <div className="SportCard__buttons">
        <Link to={`/league/${props.sport.league_id}`}>
          <button className="SportCard__button"> See League </button>
        </Link>

        <button className="SportCard__button"> Find Match </button>
      </div>
    </div>
  );
}
