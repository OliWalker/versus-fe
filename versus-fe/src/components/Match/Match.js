import React, { Component } from 'react';
import './Match.css'
class Match extends Component {

  render() {
    return (
      <div>
        <div className="aMatchContainer">

          <div className="sportImage">
            <img src="http://www1.pictures.zimbio.com/gi/Roger+Federer+Olympics+Day+5+Tennis+UT0s03tVnhVl.jpg"/>
          </div>

          <div className="UsersMatched">
            <span>{this.props.user1.user_id}</span>
            <span>{this.props.user2.user_id}</span>
            <div className="status">
              {this.props.status}
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Match;
