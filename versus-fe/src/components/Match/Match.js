import React, { Component } from 'react';
import './Match.css';
class Match extends Component {
  render() {
    const { user1, user2 } = this.props.matchInfo;
    console.log(user1);
    console.log(user2);
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
            <div className="MatchContainer__Content">
              <h2> {this.props.matchInfo.sport_name}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;

const finished = (user1, user2) => {
  return (
    <div>
      <span className="Match__container__result">
        <b>{user1.score}</b> / {user2.score}
      </span>
      <i> + 30 points! </i>
    </div>
  );
};

const choices = () => {
  return (
    <div>
      <button className="accept"> accept </button>
      <button className="decline"> decline </button>
    </div>
  );
};

const waiting = () => {
  return (
    <div className="waiting">
      <h2>
        <i>waiting...</i>
      </h2>
    </div>
  );
};

const denied = () => {
  return (
    <div className="denied">
      <h2>
        <i>denied</i>
      </h2>
    </div>
  );
};

const accepted = () => {
  return (
    <div className="accepted">
      <div className="date">
        <span>7th Spt</span>
        <span>18:00 hr</span>
      </div>
      <h5> location </h5>
    </div>
  );
};
