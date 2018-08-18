import React, { Component } from 'react';
import './MatchOne.css';
import { connect } from 'react-redux';
import {
  getOpponent,
  removeOpponent,
  getUserInfo,
  createMatch
} from '../../redux/actions';
import MatchOneOpponent from '../../components/MatchOneOpponent/MatchOneOpponent';

class MatchOne extends Component {
  constructor(props) {
    super(props);
    const { league, opponent } = this.props.match.params;
    this.props.getOpponent(league, opponent);
  }

  challenge = () => {
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
  };

  backButton = () => {
    this.props.removeOpponent();
    this.props.history.goBack();
  };

  render() {
    if (!this.props.opponentNow.user_id) return <h1> loading </h1>;
    return (
      <div className="MatchOne">
        <div className="MatchOne__Header">
          <span> {this.props.leagueNow.sport_name} </span>
          <h1> Versus </h1>
        </div>

        <div className="MatchOne__players">
          <div className="MatchOne__user">
            <MatchOneOpponent user={this.props.user} stats={this.props.stats} />
          </div>

          <div className="MatchOne__opponent">
            <MatchOneOpponent opponent={this.props.opponentNow} />
          </div>
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
