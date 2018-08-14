import React from 'react'
import './LeagueCard.css'

export default function LeagueCard (props) {
  console.log(props)
    return (
      <div className="LeagueCard">
        <div className="LeagueCard__score">
          <p>{props.i+1}</p>
          <div className="LeagueCard__picture"><img src={props.user.image_path}/></div>
        </div>
        <h2 className="LeagueCard__name"> {props.user.username} </h2>
        <span className="LeagueCard__score"> {props.user.score} </span>
      </div>
    )
    
  }

