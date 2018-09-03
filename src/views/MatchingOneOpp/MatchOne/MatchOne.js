import React, { Component } from 'react';
import './MatchOne.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getOpponent,
  removeOpponent,
  getUserInfo,
  createMatch
} from '../../../redux/actions';
import MatchOneOpponent from '../MatchOneOpponent/MatchOneOpponent';
import Loading from '../../Misc/LoadingPage/LoadingPage';

class MatchOne extends Component {
  componentDidMount() {
    const { league, opponent } = this.props.match.params;

    if (this.props.opponentNow.user_id === Number(opponent)) return;
    this.props.getOpponent(league, opponent);
  }

  state = {
    challengeStyle: { height: 750 },
    challengeSentStyle: { height: 0 },
    matchCreated: false
  };

  challenge = () => {
    if (this.state.matchCreated) return;

    const user1_id = this.props.user.user_id;
    const league_id = this.props.match.params.league;
    const user2_id = this.props.opponentNow.user_id;

    const info = {
      endpoint: '/versus',
      method: 'POST',
      body: {
        league_id,
        user1_id,
        user2_id
      }
    };
    this.props.createMatch(info);
    this.setState({
      challengeStyle: { height: 0 },
      challengeSentStyle: { height: 750 },
      matchCreated: true
    });
  };

  backButton = () => {
    this.props.removeOpponent();
    this.props.history.goBack();
  };

  render() {
    if (!this.props.opponentNow.user_id) return <Loading />;
    if (!this.props.user.user_id) return <Loading />;
    return (
      <div className="MatchOne">
        <div className="MatchOne__Header">
          <span>
            <i>{this.props.leagueNow.sport_name}</i>
          </span>
          <h1> Challenge </h1>
        </div>

        <div className="MatchOne__players" style={this.state.challengeStyle}>
          <MatchOneOpponent
            user={this.props.user}
            stats={this.props.stats}
            league={this.props.match.params.league}
          />
          <MatchOneOpponent opponent={this.props.opponentNow} />
        </div>

        <div
          className="MatchOne__ChallengeSent"
          style={this.state.challengeSentStyle}
        >
          <h1> Challenge Sent </h1>
          <h2> Good Luck. </h2>
          <Link to="/matches">
            <button className="MatchOne__button">To Matches</button>
          </Link>
        </div>

        <div className="MatchOne__buttons">
          <button className="MatchOne__button" onClick={this.challenge}>
            Challenge
          </button>
          <button className="MatchOne__button" onClick={this.backButton}>
            back
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  stats: state.stats,
  leagueNow: state.leagueNow,
  opponentNow: state.opponentNow,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getOpponent: (leagueId, userId) =>
    dispatch(getOpponent({ endpoint: `/opponent/${leagueId}/${userId}` })),
  getUserInfo: () => dispatch(getUserInfo({ endpoint: '/users/1' })),
  createMatch: info => dispatch(createMatch(info)),
  removeOpponent: () => dispatch(removeOpponent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchOne);
