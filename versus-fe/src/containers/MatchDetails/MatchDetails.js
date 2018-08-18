import React, { Component } from 'react';
import './MatchDetails.css'

import MatchDetailsInfo from '../../components/MatchDetailsInfo/MatchDetailsInfo'
import Loading from '../../components/LoadingPage/LoadingPage'
import { connect } from 'react-redux'
import { sendMatchDetails } from '../../redux/actions'



class MatchDetails extends Component {

  constructor(props){
    super(props)
    this.filteredMatch()
    this.state = {
      aMatch: {},
      opponent: {}
    }

  }

  filteredMatch = () => {
    const IdParam = this.props.match.params.id
    const IdString = IdParam.split('').splice(1,1)
    const IdOfMatch = parseInt(IdString, 10)
    const MatchedWithID = this.state.aMatch.filter( theMatch => {
      if (theMatch.matches_id === IdOfMatch) {
        return theMatch
      }
    })
    this.setState({
      aMatch: MatchedWithID
    })

  }

  opponentInfo = () => {
    const opponentId = this.state.aMatch.user2.user_id

  }

  render() {
    return (
      <div className="MatchDetailsContainer">

        <div>
          <h1> Match Details </h1>
        </div>

        <div className="viewController">
          <button type="button" name="details"> Details </button>
          <button type="button" name="details"> Messages </button>
        </div>

        <MatchDetailsInfo/>

      </div>
    );
  }

}



const mapStateToProps = (state ) => ({
  mainUser: state.user
  aMatch: state.matches
})

const mapDispatchToProps = (dispatch) => ({
  sendMatchDetails: () => dispatch(sendMatchDetails())
})



export default MatchDetails;
