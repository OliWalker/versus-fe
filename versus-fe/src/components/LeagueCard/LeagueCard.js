import React from 'react'
import './LeagueCard.css'

export default function LeagueCard (props) {
  
    return (
      <div className="LeagueCard">
        <div className="LeagueCard__score">
          <p>i</p>
          <div className="LeagueCard__picture"><img src="http://profilepicturesdp.com/wp-content/uploads/2018/07/profile-picture-black-and-white-1.jpg" /></div>
        </div>
        <h2 className="LeagueCard__name"> John </h2>
        <span className="LeagueCard__score"> 1356 </span>
      </div>
    )
  }

