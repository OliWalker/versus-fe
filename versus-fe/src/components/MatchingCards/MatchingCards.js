import React from 'react';
import './MatchingCards.css';

//not finished - may not make it to production...
const animate = e => {
  const content = document.querySelector('.MatchingCards__extraContent');
  e.target.classList.add('MatchingCards__stageTwo');
  content.classList.add('MatchingCards__contentShow');
};

export default function MatchingCards(props) {
  return (
    <div className="MatchingCards" onClick={animate}>
      <div className="MatchingCards__firstContent" />

      <div className="MatchingCards__extraContent" />
    </div>
  );
}
