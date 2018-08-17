import React, { Component } from 'react';
import './Match.css';
class Match extends Component {
  render() {
    console.log(this.props.matchInfo.sport_name);
    console.log(this.props.matchInfo.user2.username);
    return (
      <div>
        <div className="MatchContainer">
          <div className="MatchContainer__imageContainer">
            <img
              className="MatchContainer__sportImage"
              src="http://www1.pictures.zimbio.com/gi/Roger+Federer+Olympics+Day+5+Tennis+UT0s03tVnhVl.jpg"
              alt="logo for the chosen sport"
            />
            <h3>{this.props.matchInfo.user2.username}</h3>
          </div>

          <div className="MatchContainer__UsersMatched">
            <h3> {this.props.matchInfo.sport_name}</h3>
            <div className="MatchContainer__Content">
              <span className="Match__container__result"> 1 / 3 </span>
              <i> + 30 points! </i>
              {/* <span className="Match__container__score"> 1 / 3 </span> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
