import React from 'react';
import PropTypes from 'prop-types';
import './PastMatchCard.css';

const PastMatchCard = ({ pastMatch }) => (
  <div className="cardPastMatch">
    <span>{pastMatch.result}</span>
    <span>{pastMatch.score}</span>
    <span>{pastMatch.elo}</span>
  </div>
);

PastMatchCard.propTypes = {
  pastMatch: PropTypes.object
};

export default PastMatchCard;
