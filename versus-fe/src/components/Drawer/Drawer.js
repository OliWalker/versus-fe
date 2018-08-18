import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Drawer.css';
import { Link } from 'react-router-dom';
import { getOneLeague } from '../../redux/actions';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerStatus: '',
      hamburgerStatus: '',
      leaguesStatus: ''
    };
  }

  toggleLeagues = () => {
    const target = document.querySelector('.Drawer__LeagueList');
    if (this.state.leaguesStatus === '') {
      target.style.height = '300px';
      this.setState({ leaguesStatus: 'open' });
    } else {
      target.style.height = '0';
      this.setState({ leaguesStatus: '' });
    }
  };

  toggleDrawer = () => {
    const hamburgerStatus =
      this.state.hamburgerStatus === '' ? 'Drawer__hamburger__open' : '';
    const drawerStatus =
      this.state.drawerStatus === '' ? 'Drawer__drawer__open' : '';
    this.setState({ hamburgerStatus, drawerStatus });
  };

  switchLeague = leagueId => this.props.getOneLeague(leagueId);

  render() {
    const stats = this.props.stats;
    const notifications = this.props.matches.filter(
      match => match.status === 'PENDING'
    ).length;

    return (
      <div>
        <i
          className={`fas fa-bars Drawer__hamburger ${
            this.state.hamburgerStatus
          }`}
          onClick={this.toggleDrawer}
        />
        <div className={`Drawer ${this.state.drawerStatus}`}>
          <Link to="/profile" onClick={this.toggleDrawer}>
            <h1 className="Drawer__logo">Versus</h1>
          </Link>

          <div className="Drawer__button__list">
            <div className="Drawer__button" onClick={this.toggleLeagues}>
              <i className="fas fa-trophy" />
              <span> Leagues </span>
            </div>

            <div className={'Drawer__LeagueList'}>
              {stats.map(league => {
                const cliker = () => {
                  this.toggleDrawer();
                  this.toggleLeagues();
                  return this.switchLeague(league.league_id);
                };
                return (
                  <Link
                    key={league.league_id}
                    to={`/league/${league.league_id}`}
                    className={'Drawer__LeagueList__sport'}
                    onClick={cliker}
                  >
                    {league.name}
                  </Link>
                );
              })}
            </div>

            <Link to="/myMatches" onClick={this.toggleDrawer}>
              <div className="Drawer__button Drawer__button__notie">
                {notifications > 0 ? (
                  <div className="Drawer__button__notification">
                    {notifications}
                  </div>
                ) : null}
                <i className="far fa-calendar-check" />
                <span> Matches</span>
              </div>
            </Link>

            <Link to="/sportsList" onClick={this.toggleDrawer}>
              <div className="Drawer__button">
                <i className="fas fa-futbol" />
                <span>Sports</span>
              </div>
            </Link>

            <Link to="/" onClick={this.toggleDrawer}>
              <div className="Drawer__button">
                <i className="fas fa-power-off" />
                <span> Log-out </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
  matches: state.matches
});

const mapDispatchToProps = dispatch => ({
  getOneLeague: league_id =>
    dispatch(getOneLeague({ endpoint: `/leagues/${league_id}` }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);
