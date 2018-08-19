import React, { Component } from 'react';
import PastMatchCard from '../PastMatchCard/PastMatchCard'
import './OpponentDetails.css'
class OpponentDetails extends Component {

  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history
    return previousMatches.map( previousMatch => {
      return <PastMatchCard pastMatch={previousMatch}/>
    })
  }

  render() {
    return (
      <div>
        <div className='opponentContainer'>

          <div className="opponentProfile">

            <div className='opponentPhotoDiv'>
              <img className="opponentPhoto" src={this.props.theOpponent.image_path} alt="the beautiful"/>
            </div>

            <div className='opponentNameDiv'>
              <text className='opponentName'> {this.props.theOpponent.username} </text>
            </div>

          </div>

          <div className='opponentPastGames'>
            {this.renderMatch_history()}
          </div>

        </div>
      </div>
    );
  }
}

export default OpponentDetails;
