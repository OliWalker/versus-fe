import React, { Component } from 'react';
import './Match.css'
class Match extends Component {

  render() {
    return (
      <div>
        <div className="aMatchContainer">

          <div className="imageContainer">
            <img className="sportImage" src="http://www1.pictures.zimbio.com/gi/Roger+Federer+Olympics+Day+5+Tennis+UT0s03tVnhVl.jpg"/>
          </div>

          <div className="UsersMatched">
            <span>{this.props.matchInfo.user1.user_id}</span>
            <p> vs </p>
            <span>{this.props.matchInfo.user2.user_id}</span>
          </div>

          <div className="status">
            {this.props.matchInfo.status}
          </div>

        </div>
      </div>
    );
  }

}

export default Match;
