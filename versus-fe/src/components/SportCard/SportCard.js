import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';

const toggleOpen = e => {
  let target;
  e.target.classList.contains('SportCard__open')
    ? (target = e.target.nextSibling)
    : (target = e.target.parentNode.nextSibling);
  if (target.style.height !== '100px') {
    TweenMax.to(target, 0.2, {
      height: 100
    });
  } else {
    TweenMax.to(target, 0.2, {
      height: 0
    });
  }
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
