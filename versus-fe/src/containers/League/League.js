import React, { Component } from 'react'
import './League.css'
import LeagueCard from '../../components/LeagueCard/LeagueCard';

export default class League extends Component {
  render() {
    return (
      <div className='League'>
        <div className='League__info'>
          <h1> Tennis </h1>
          <span><i>1000</i></span>
        </div>

        <div className="League__leaderboard" >
          <div className="League__leaderboard__trophy"> <i className="fas fa-trophy"></i> </div>
          {/* <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard /> */}
        </div>

        
      </div>
    )
  }
}
