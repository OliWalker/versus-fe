import React, { Component } from 'react';
import './Match.css';
import innerMatch from './innerMatch';
import { connect } from 'react-redux';
import { acceptMatch, declineMatch, deleteMatch } from '../../../redux/actions';

class Match extends Component {
  state = { deleted: false };

  accept = () => this.props.acceptMatch(this.props.matchInfo.match_id);

  decline = () => this.props.declineMatch(this.props.matchInfo.match_id);

  delete = () => {
    this.setState({ deleted: true });
    this.props.deleteMatch(this.props.matchInfo.match_id);
  };

  render() {
    // const opponent_i =
    //   this.props.user.user_id === this.props.matchInfo.user1.user_id
    //     ? this.props.matchInfo.user2.user_id
    //     : this.props.user.user_id;
    // const opponent_id = { opponent_id: opponent_i };
    const opponent_id = 9;

    const {
      user1,
      user2,
      league_id,
      match_id,
      match_datetime,
      location
    } = this.props.matchInfo;
    let innerComponent, innerFunction;
    console.log(user1, user2);

    switch (this.props.matchInfo.status) {
      case 'FINISHED':
        innerComponent = innerMatch.finished;
        break;
      case 'ACCEPTED':
        innerComponent = innerMatch.accepted;
        break;
      case 'PENDING':
        if (this.props.user.user_id === user1.user_id)
          innerComponent = innerMatch.waiting;
        else {
          innerComponent = innerMatch.choices;
          innerFunction = { accept: this.accept, decline: this.decline };
        }
        break;
      case 'DENIED':
        innerComponent = innerMatch.denied;
        innerFunction = this.delete;
        break;
      default:
        innerComponent = null;
    }
    if (innerComponent === null) return <div />;
    if (this.state.deleted) return <div />;
    else
      return (
        <div>
          <div className="MatchContainer">
            <div className="MatchContainer__imageContainer">
              <img
                className="MatchContainer__sportImage"
                src={
                  user1.user_id === this.props.user.user_id
                    ? user2.image_path
                    : user1.image_path
                }
                alt="logo for the chosen sport"
              />

              <h3>
                {user1.user_id === this.props.user.user_id
                  ? user2.username
                  : user1.username}
              </h3>
            </div>

            <div className="MatchContainer__UsersMatched">
              <div className="MatchContainer__Content">
                <h2> {this.props.matchInfo.sport_name}</h2>
                {innerComponent({
                  user1,
                  user2,
                  innerFunction,
                  league_id,
                  opponent_id,
                  match_id,
                  match_datetime,
                  location
                })}
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  acceptMatch: match_id =>
    dispatch(
      acceptMatch({ endpoint: `/matches/${match_id}/accept`, method: 'PUT' })
    ),
  declineMatch: match_id =>
    dispatch(
      declineMatch({ endpoint: `/matches/${match_id}/reject`, method: 'PUT' })
    ),
  deleteMatch: match_id =>
    dispatch(
      deleteMatch({
        endpoint: `/matches/${match_id}/delete}`,
        method: 'PUT'
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Match);
