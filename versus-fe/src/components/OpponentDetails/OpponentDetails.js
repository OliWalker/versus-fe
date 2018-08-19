import React, { Component } from 'react';
import PastMatchCard from '../PastMatchCard/PastMatchCard'

class OpponentDetails extends Component {

  renderMatch_history = () => {
    const previousMatches = this.props.theOpponent.match_history
    console.log(previousMatches,'previousMatches')
    return previousMatches.map( previousMatch => {
      return <PastMatchCard pastMatch={previousMatch}/>
    })
  }

  render() {
    return (
      <div>
        <div className='opponentContainer'>

          <div className="opponentTitle">

            <div className='opponentPhoto'>
              <img src={this.props.theOpponent.image_path} alt="the beautiful"/>
            </div>

            <div className='opponentName'>
              <text className='OpponentName'> {this.props.theOpponent.username} </text>
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
