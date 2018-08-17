import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Drawer.css';
import { Link } from 'react-router-dom';
import { TweenMax } from 'gsap';

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
      TweenMax.to(target, 0.2, {
        height: 300
      });
      this.setState({ leaguesStatus: 'open' });
    } else {
      TweenMax.to(target, 0.2, {
        height: 0
      });
      this.setState({ leaguesStatus: '' });
    }
  };

  openDrawer = () => {
    const hamburgerStatus =
      this.state.hamburgerStatus === '' ? 'Drawer__hamburger__open' : '';
    const drawerStatus =
      this.state.drawerStatus === '' ? 'Drawer__drawer__open' : '';
    this.setState({ hamburgerStatus, drawerStatus });
  };

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
          onClick={this.openDrawer}
        />
        <div className={`Drawer ${this.state.drawerStatus}`}>
          <Link to="/profile">
            <h1 className="Drawer__logo">Versus</h1>
          </Link>

          <div className="Drawer__button__list">
            <div className="Drawer__button" onClick={this.toggleLeagues}>
              <i className="fas fa-trophy" />
              <span> Leagues </span>
            </div>

            <div className={'Drawer__LeagueList'}>
              {stats.map(league => {
                return (
                  <Link
                    key={league.league_id}
                    to={`/league/${league.league_id}`}
                    className={'Drawer__LeagueList__sport'}
                  >
                    {league.name}
                  </Link>
                );
              })}
            </div>

            <Link to="/myMatches">
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

            <Link to="/sportsList">
              <div className="Drawer__button">
                <i className="fas fa-futbol" />
                <span>Sports</span>
              </div>
            </Link>

            <Link to="/">
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

export default connect(mapStateToProps)(Drawer);
