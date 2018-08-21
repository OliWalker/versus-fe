import React from 'react';
import './SportCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { joinLeague } from '../../redux/actions';

class SportCard extends React.Component {
  state = {
    isOpen: false,
    isJoinOpen: false,
    skill: 0
  };

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  toggleJoin = () => {
    this.state.skill > 0
      ? this.joinLeague()
      : this.setState(({ isJoinOpen }) => ({ isJoinOpen: !isJoinOpen }));
  };

  setSkill = e => this.setState({ skill: e.target.name });

  joinLeague = () => {
    const user_id = this.props.user.user_id;
    const league_id = this.props.sport.league_id;
    const initial_elo = Number(this.state.skill);
    const body = {
      user_id,
      league_id,
      initial_elo
    };
    this.props.joinLeague(league_id, body);
  };

  render() {
    const height = this.state.isOpen ? { height: 100 } : { height: 0 };
    const joinHeight = this.state.isJoinOpen ? { height: 175 } : { height: 0 };
    return (
      <div>
        <div className="SportCard" onClick={this.toggle}>
          <h2> {this.props.sport.sport_name} </h2>
          <img
            src={`./${this.props.sport.sport_name}.png`}
            alt="lets play this sport"
          />
        </div>

        <div className="SportCard SportCard__JoinLeague" style={joinHeight}>
          <div className="SkillLevel" onClick={this.toggleJoin}>
            Choose Your Skill Level
          </div>
          <div className="SportCard__JoinLeague__buttons">
            <button
              className="SportCard__button"
              onClick={this.setSkill}
              name={800}
            >
              Begginer
            </button>
            <button
              className="SportCard__button"
              onClick={this.setSkill}
              name={1000}
            >
              Intermediate
            </button>
            <button
              className="SportCard__button"
              onClick={this.setSkill}
              name={1200}
            >
              Advanced
            </button>
          </div>
        </div>

        <div className="SportCard__buttons" style={height}>
          {this.props.mine ? (
            <div className="SportCard__myButtons">
              <Link to={`/league/${this.props.sport.league_id}`}>
                <button className="SportCard__button"> See League </button>
              </Link>
              <button className="SportCard__button"> Find Match </button>
            </div>
          ) : (
            <button className="SportCard__button" onClick={this.toggleJoin}>
              {this.state.skill ? 'Click to Join!' : 'Want To Join?'}
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  joinLeague: (leagueId, body) =>
    dispatch(
      joinLeague({
        endpoint: `/barcelona/leagues/${leagueId}/join`,
        method: 'POST',
        body
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportCard);
