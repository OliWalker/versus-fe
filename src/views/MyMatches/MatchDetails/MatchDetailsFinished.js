import React, { Component } from 'react';
import { connect } from 'react-redux';
import { finishMatch } from '../../../redux/actions';

export class MatchDetailsFinished extends Component {
  state = {
    myScore: '',
    opScore: '',
    message: 'Enter Your Scores'
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  postFinishedResults = () => {
    const users = {
      user1: {
        user_id: this.props.user.user_id,
        score: this.state.myScore
      },
      user2: {
        user_id: this.props.opponentNow.user_id,
        score: this.state.opScore
      },
      league_id: this.props.league_id
    };

    if (this.state.myScore > this.state.opScore)
      this.setState({ message: 'You Are A Champion!' });
    else if (this.state.myScore < this.state.opScore)
      this.setState({ message: 'Better Luck Next Time...' });
    else this.setState({ message: 'A Draw... how exciting' });
    setTimeout(() => {
      this.props.goBack();
    }, 700);

    return this.props.finishMatch(users, this.props.match_id);
  };

  render() {
    return (
      <div className="MatchDetails__finished">
        <div className="MatchDetails__finished__scorecards">
          <div className="MatchDetails__finished__Score">
            <input
              type="number"
              value={this.state.myScore}
              className="YourScore"
              onChange={this.handleFormChange}
              name="myScore"
            />
            <span> your score </span>
          </div>
          <p>-</p>
          <div className="MatchDetails__finished__Score">
            <input
              type="number"
              value={this.state.opScore}
              className="YourScore"
              onChange={this.handleFormChange}
              name="opScore"
            />
            <span> opponent score </span>
          </div>
        </div>

        <div className="endNote">{this.state.message}</div>

        <div
          className="MatchDetails__finished__button"
          onClick={this.postFinishedResults}
        >
          Send
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  opponentNow: state.opponentNow
});

const mapDispatchToProps = dispatch => ({
  finishMatch: (matchData, match_id) =>
    dispatch(
      finishMatch({
        body: matchData,
        method: 'POST',
        endpoint: `/matches/${match_id}/finish`
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchDetailsFinished);
