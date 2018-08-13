import React, { Component } from 'react'
import './League.css'
import LeagueCard from '../../components/LeagueCard/LeagueCard';

export default class League extends Component {
  render() {
    return (
      <div className='League'>
        <h1> props.title </h1>
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />
        <LeagueCard />

        
      </div>
    )
  }
}
