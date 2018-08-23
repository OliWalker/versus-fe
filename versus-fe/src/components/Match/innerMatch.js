import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ProfilePage } from '../../containers/ProfilePage/ProfilePage';

const randomScore = () => {
  return Math.floor(Math.random() * 50);
};

export default {
  finished: props => {
    return (
      <div className="MatchContainer__Content__result">
        <span>
          <b>{props.user1.score}</b> / {props.user2.score}
        </span>
        <i> + {props.user1.elo_diff || randomScore()} points! </i>
      </div>
    );
  },

  choices: props => {
    return (
      <div>
        <button
          className="MatchContainer__Content__accept"
          onClick={props.innerFunction.accept}
        >
          accept
        </button>
        <button
          className="MatchContainer__Content__decline"
          onClick={props.innerFunction.decline}
        >
          decline
        </button>
      </div>
    );
  },

  waiting: props => {
    return (
      <Link
        className="MatchContainer__Content__waiting"
        to={`/matchdetails/${props.match_id}/${props.league_id}/${
          props.opponent_id
        }`}
      >
        <h2>
          <i>waiting...</i>
        </h2>
      </Link>
    );
  },

  denied: props => {
    return (
      <div className="MatchContainer__Content__denied">
        <div
          className="MatchContainer__Content__denied__banner"
          onClick={props.innerFunction}
        >
          <h2>
            <i>canceled</i>
          </h2>
        </div>
        <i className="fas fa-trash-alt" onClick={props.innerFunction} />
      </div>
    );
  },

  accepted: props => {
    console.log(props);
    const date = moment(props.match_datetime).format('MMM Do');
    const time = moment(props.match_datetime).format('h:mm a');
    console.log(date === 'Invalid date');
    return (
      <Link
        className="MatchContainer__Content__accepted"
        to={`/matchdetails/${props.match_id}/${props.league_id}/${
          props.opponent_id
        }`}
      >
        {date === 'Invalid date' ? (
          <div className="Match__Content__set"> Set match details </div>
        ) : (
          <div className="MatchContainer__Content__date">
            <span>{date}</span>
            <span>{time}</span>
            <h5> {props.location} </h5>
          </div>
        )}
      </Link>
    );
  }
};
