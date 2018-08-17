import React, { Component } from 'react';
import './Match.css';
import innerMatch from './innerMatch';

class Match extends Component {
  render() {
    const { user1, user2 } = this.props.matchInfo;
    let innerComponent;

    switch (this.props.matchInfo.status) {
      case 'FINISHED':
        innerComponent = innerMatch.finished;
        break;
      case 'ACCEPTED':
        innerComponent = innerMatch.accepted;
        break;
      case 'PENDING':
        this.props.user.user_id === user1.user_id
          ? (innerComponent = innerMatch.waiting)
          : (innerComponent = innerMatch.choices);
        break;
      case 'DENIED':
        innerComponent = innerMatch.denied;
        break;

      default:
        innerComponent = null;
    }

    console.log(innerComponent);

    return (
      <div>
        <div className="MatchContainer">
          <div className="MatchContainer__imageContainer">
            <img
              className="MatchContainer__sportImage"
              src="http://www1.pictures.zimbio.com/gi/Roger+Federer+Olympics+Day+5+Tennis+UT0s03tVnhVl.jpg"
              alt="logo for the chosen sport"
            />
            <h3>{user2.username}</h3>
          </div>

          <div className="MatchContainer__UsersMatched">
            <div className="MatchContainer__Content">
              <h2> {this.props.matchInfo.sport_name}</h2>
              {innerComponent(user1, user2)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
