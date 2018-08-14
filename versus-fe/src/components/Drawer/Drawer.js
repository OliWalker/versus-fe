import React from 'react'
import './Drawer.css'
import { Link } from 'react-router-dom'

const toggleLeagues = () => {
  const LeagueList = document.querySelector('.Drawer__LeagueList')
  const LeagueListSport = document.querySelectorAll('.Drawer__LeagueList__sport')


  if (LeagueList.classList.contains('Drawer__LeagueList__closed')) {
    LeagueList.classList.remove('Drawer__LeagueList__closed')
    LeagueListSport.forEach(el => el.classList.remove('Drawer__LeagueList__closed', 'text'))
  } else {
    LeagueList.classList.add('Drawer__LeagueList__closed')
    LeagueListSport.forEach(el => el.classList.add('Drawer__LeagueList__closed', 'text'))
  }
}

export default function Drawer (props) {
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

        <div className="Drawer__LeagueList Drawer__LeagueList__closed">
          <span className="Drawer__LeagueList__sport Drawer__LeagueList__closed text"> Tennis </span>
          <span className="Drawer__LeagueList__sport Drawer__LeagueList__closed text"> Eating </span>
          <span className="Drawer__LeagueList__sport Drawer__LeagueList__closed text"> Ping-Pong </span>
          <span className="Drawer__LeagueList__sport Drawer__LeagueList__closed text"> Juggling </span>
        </div>

        <Link to='/matches'>
          <div className="Drawer__button">
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