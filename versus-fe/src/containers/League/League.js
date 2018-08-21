import React, { Component } from 'react';
import './League.css';
import LeagueCard from '../../components/LeagueCard/LeagueCard';
import { connect } from 'react-redux';
import { getOneLeague } from '../../redux/actions';

class League extends Component {
  componentDidMount() {
    if (!this.props.leagueNow.users)
      this.props.getOneLeague(this.props.match.params.id);
  }

  render() {
    const league = this.props.leagueNow;
    const league_id = this.props.match.params.id;

    return (
      <div className="League">
        <div className="League__info">
          <h1>
            <i>{league.sport_name}</i>
          </h1>
          <span>1000</span>
        </div>

        <div className="League__leaderboard">
          <div className="League__leaderboard__trophy">
            <i className="fas fa-trophy" />
          </div>
          {league.users
            ? league.users.map((user, i) => (
                <LeagueCard
                  key={user.user_id}
                  i={i}
                  user={user}
                  mainUser={this.props.user}
                  league={league_id}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leagueNow: state.leagueNow,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getOneLeague: league_id =>
    dispatch(getOneLeague({ endpoint: `/barcelona/leagues/${league_id}` }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(League);
