import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Drawer.css';

import { Link } from 'react-router-dom';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerClass: '',
      hamburgerClass: '',
      leaguesClass: 'Drawer__LeagueList__closed'
    };
  }

  toggleLeagues = () => {
    const leaguesClass =
      this.state.leaguesClass === '' ? 'Drawer__LeagueList__closed' : '';
    this.setState({ leaguesClass });
  };

  openDrawer = () => {
    const hamburgerClass =
      this.state.hamburgerClass === '' ? 'Header__hamburger__open' : '';
    const drawerClass =
      this.state.drawerClass === '' ? 'Header__drawer__open' : '';
    this.setState({ hamburgerClass, drawerClass });
  };

  render() {
    const stats = this.props.stats;

    const notifications = this.props.matches.filter(
      match => match.status === 'PENDING'
    ).length;

    return (
      <div className="Header">
        <div className={`Header__drawer ${this.state.drawerClass}`}>
          <div className="Drawer">
            <Link to="/profile">
              <div className="Drawer__logo">
                <h1> Versus </h1>
              </div>
            </Link>

            <div className="Drawer__button__list">
              <div className="Drawer__button" onClick={this.toggleLeagues}>
                <i className="fas fa-trophy" />
                <span> Leagues </span>
              </div>

              <div className="Drawer__LeagueList ">
                {stats[0]
                  ? stats.map(league => {
                      return (
                        <Link
                          key={league.league_id}
                          to={`/league/${league.league_id}`}
                          className={`Drawer__LeagueList__sport ${
                            this.state.leaguesClass
                          }`}
                        >
                          {league.name}
                        </Link>
                      );
                    })
                  : null}
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

        <i
          className={`fas fa-bars Header__hamburger ${
            this.state.hamburgerClass
          }`}
          onClick={this.openDrawer}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.stats,
  matches: state.matches
});

export default connect(mapStateToProps)(Drawer);
