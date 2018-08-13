import React, { Component } from 'react'
import './MatchingCardsList.css'
import MatchingCards from '../../components/MatchingCards/MatchingCards';


export default class MatchingCardsList extends Component {


  render() {
    return (
      <div className="MatchingCardsList">

        <div className="MatchingCardsList__slider">

          <MatchingCards />

        </div>

      </div> 
    )
  }
}
