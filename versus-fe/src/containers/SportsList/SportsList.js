import React, { Component } from 'react'
import './SportsList.css'
import SportCard from '../../components/SportCard/SportCard';

export default class SportsList extends Component {
  render() {
    return (
      <div className='SportsList'>
      {/* {this.props.sports.map(sport => SportCard)} */}
        <SportCard />
        <SportCard />
        <SportCard />


        
      </div>
    )
  }
}
