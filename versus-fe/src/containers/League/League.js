import React, { Component } from 'react'
import './League.css'
import LeagueCard from '../../components/LeagueCard/LeagueCard';
import { connect } from 'react-redux'
import { getOneLeague } from '../../redux/actions'
import Loading from '../../components/LoadingPage/LoadingPage';

class League extends Component {

  constructor(props) {
    super(props)
    const league_id = props.location.pathname.split('/').pop()
    this.props.getOneLeague(league_id)

  }


  render() {
    const league = this.props.leagueNow;

    if (this.props.loading) return <Loading />

    else return (
      <div className='League'>
        <div className='League__info'>
          <h1> {league.sport_name} </h1>
          <span><i>1000</i></span>
        </div>

        <div className="League__leaderboard" >
          
          <div className="League__leaderboard__trophy"> <i className="fas fa-trophy"></i> </div>
          { league.users ? 
          league.users.map((user, i) => <LeagueCard key={i} i={i} user={user}/>)
          : null }
          </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  leagueNow: state.leagueNow,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  getOneLeague: (league_id) => dispatch(getOneLeague({endpoint:`/leagues/${league_id}`}))
})

export default connect(mapStateToProps, mapDispatchToProps)(League)
