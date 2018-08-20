import React, { Component } from 'react';
import './MatchDetails.css'

import MatchDetailsInfo from '../../components/MatchDetailsInfo/MatchDetailsInfo'
import OpponentDetails from '../../components/OpponentDetails/OpponentDetails'


import { connect } from 'react-redux'
import { sendMatchDetails , getOpponent } from '../../redux/actions'

class MatchDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {
      aMatch: {},
      opponentNow: 'false'
    }
    this.filteredMatchAndGetOpponent()
  }

  componentDidUpdate(prevProps) {
    if (this.props.opponentNow !== prevProps.opponentNow) {
      this.setState({opponentNow: this.props.opponentNow})
    }
  }

  filteredMatchAndGetOpponent = () => {
    const IdParam = this.props.match.params.id
    const IdOfMatch = parseInt(IdParam, 10)
    const matchedWithId = this.props.matches.filter( theMatch => theMatch.matches_id === IdOfMatch )
    this.setState( {aMatch: {...matchedWithId} } )
    this.props.getOpponent()
  }

  renderOpponentStats = () => {
    if(this.state.opponentNow !== 'false') {
        return <OpponentDetails theOpponent={this.state.opponentNow}/>
      }
    }

  render() {
      return (
        <div className="matchDetailsContainer">

          <div className="matchTitle">
            <h1> Match Details </h1>
          </div>

          <div className="matchOpponentStats">
            {this.renderOpponentStats()}
          </div>

          <div className="matchDetailsInfo">
            <MatchDetailsInfo sendAction={this.props.sendMatchDetails} />
          </div>

        </div>
      )
    }

  }

const mapStateToProps = (state) => ({
  user: state.user,
  matches: state.matches,
  opponentNow: state.opponentNow,
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  sendMatchDetails: (apiInfo) => dispatch(sendMatchDetails(apiInfo)),
  getOpponent: () => dispatch(getOpponent({ endpoint: '/opponent/leagueid/userid' }))
})


export default connect(mapStateToProps, mapDispatchToProps)(MatchDetails);
