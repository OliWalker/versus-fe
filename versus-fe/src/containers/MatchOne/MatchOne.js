import React, { Component } from 'react';
import './MatchOne.css';
import { connect } from 'react-redux';
import {
  getOpponent,
  removeOpponent,
  getUserInfo,
  createMatch
} from '../../redux/actions';
import { Link } from 'react-router-dom';
import MatchOneOpponent from '../../components/MatchOneOpponent/MatchOneOpponent';
import Loading from '../../components/LoadingPage/LoadingPage';

class MatchOne extends Component {
  constructor(props) {
    super(props);
    this.props.getOpponent(1, 2);
    if (this.props.user.user_id === undefined) this.props.getUserInfo();
  }

  challenge = () => {
    const path = this.props.location.pathname.split('/').reverse();
    const user1_id = path[0];
    const league_id = path[1];
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
    if (this.props.loading) return <Loading />;
    else
      return (
        <div className="MatchOne">
          <div className="MatchOne__Header">
            <span> sport.name </span>
            <h1> Versus </h1>
          </div>

          <div className="MatchOne__players">
            <div className="MatchOne__user">
              <MatchOneOpponent user={this.props.user} />
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
