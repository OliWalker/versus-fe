import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Drawer.css'
import { Link } from 'react-router-dom'


const toggleLeagues = () => {
  const LeagueList = document.querySelector('.Drawer__LeagueList')
  const LeagueListSport = document.querySelectorAll('.Drawer__LeagueList__sport')


  if (LeagueListSport[0].classList.contains('Drawer__LeagueList__closed')) {
    LeagueList.classList.remove('Drawer__LeagueList__closed')
    LeagueListSport.forEach(el => el.classList.remove('Drawer__LeagueList__closed', 'text'))
  } else {
    // LeagueList.classList.add('Drawer__LeagueList__closed')
    LeagueListSport.forEach(el => el.classList.add('Drawer__LeagueList__closed', 'text'))
  }
}

class Drawer extends Component {

  constructor(props) {
    super(props)
  }

  render () {

    const stats = this.props.stats
    let notifications;
    if (this.props.matches[0]) notifications = this.props.matches.filter(match => match.status === 'PENDING').length
    return (
      <div className="Drawer">

        <Link to='/profile'>
          <div className="Drawer__logo">
            <h1> Versus </h1>
          </div> 
        </Link>

        <div className="Drawer__button__list">

            <div className="Drawer__button" onClick={toggleLeagues}>
              <i className="fas fa-trophy"></i>
              <span> Leagues </span>
            </div>

          <div className="Drawer__LeagueList ">

            { stats[0] ? 
            stats.map((league, i) => {
              return ( <Link key={i} to={`/league/${league.league_id}`}
                className="Drawer__LeagueList__sport Drawer__LeagueList__closed">
                {league.name}
                </Link>
              )
            }) : null }
          </div>

          <Link to='/matches'>
            <div className="Drawer__button Drawer__button__notie">
              { notifications > 0 ? <div className='Drawer__button__notification'> {notifications} </div> :
                null }
              <i className="far fa-calendar-check"></i>
              <span> Matches</span>
            </div>
          </Link>

          <Link to='/sportsList'>
            <div className="Drawer__button">
              <i className="fas fa-futbol"></i>
              <span>Sports</span>
            </div>
          </Link>
        
          <Link to='/'>
            <div className="Drawer__button">
              <i className="fas fa-power-off"></i>
              <span> Log-out </span>
            </div>
          </Link>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.stats,
  matches: state.matches
})


export default connect(mapStateToProps)(Drawer)
