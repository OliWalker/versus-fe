import React from 'react'
import './LeagueCard.css'

export default function LeagueCard (props) {
  
    return (
      <div className="LeagueCard">
        <i className="fas fa-trophy LeagueCard__trophy" />
        <h2 className="LeagueCard__name"> props.player </h2>
        <span className="LeagueCard__score"> props.score </span>
      </div>
    )
  }

