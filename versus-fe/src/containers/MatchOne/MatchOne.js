import React, { Component } from 'react'
import './MatchOne.css'
import { connect } from 'react-redux'
import { getOpponent, getUserInfo } from '../../redux/actions'
import MatchOneOpponent from '../../components/MatchOneOpponent/MatchOneOpponent';
import Loading from '../../components/LoadingPage/LoadingPage';


class MatchOne extends Component {

  constructor(props) {
    super(props)
    this.props.getOpponent(1,2)
    if (this.props.user.user_id === undefined) this.props.getUserInfo()

  }

  challenge = () => {
    console.log("he")
  }


  render() {

    if (this.props.loading) return <Loading />
    
    else return (
      <div className="MatchOne">

        <div className="MatchOne__Header">
          <span> sport.name </span>
          <h1> Versus </h1>
          
        </div>

        <div className="MatchOne__players">

          <div className="MatchOne__user">
            <MatchOneOpponent user={this.props.user} />
          </div>

          <div className="MatchOne__opponent">
            <MatchOneOpponent opponent={this.props.opponentNow}/>
          </div>

        </div> 

        <div className="MatchOne__buttons">

          <button className="MatchOne__button" onClick={this.challenge}> Challenge </button>
          <button className="MatchOne__button"> back </button>

        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  opponentNow: state.opponentNow,
  loading: state.loading

})

const mapDispatchToProps = (dispatch) => ({
  getOpponent: (leagueId, userId) => dispatch(getOpponent({endpoint: `/opponent/${leagueId}/${userId}`})),
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'}))
})


export default connect(mapStateToProps, mapDispatchToProps)(MatchOne)