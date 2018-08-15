import React, { Component } from 'react';
import './Matches.css'
import Match from '../../components/Match/Match'

import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions'

import Loading from '../../components/LoadingPage/LoadingPage';

class Matches extends Component {

  constructor(props){
    super(props);
    this.props.getUserInfo();
    this.state = {
      filteredMatches: []
    }
  }

  renderMatches = () => {
    const filteredMatches = this.state.filteredMatches
    return filteredMatches.map(theMatch => {
      return <Match matchInfo={theMatch} />
      })
  }

  renderMatchesFilter = (event) => {
    const matches = this.props.matches
    const requestedMatches = matches.filter( theMatch => {
      if ( theMatch.status === event.target.name ) {
        return theMatch
      }
    })
    this.setState({
      filteredMatches: [...requestedMatches]
    })
  }

  render() {
    const matches = this.props.matches
    if(!matches[0]) return <Loading />

    return (
      <div>
        <h1> Matches </h1>
        <div className="buttonFilter">
          <button type="button" onClick={this.renderMatchesFilter} name="ACCEPTED"> Accepted </button>
          <button type="button" onClick={this.renderMatchesFilter}  name="PENDING"> Pending </button>
          <button type="button" onClick={this.renderMatchesFilter}  name="FINISHED"> Finished </button>
          <button type="button" onClick={this.renderMatchesFilter}  name="DENIED"> Denied </button>
        </div>
        <div ref={this.displayRef} className="displayMatches">
          {this.renderMatches()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  matches: state.matches
})

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(getUserInfo({endpoint:'/users/1'})),
})


export default connect(mapStateToProps,mapDispatchToProps)(Matches)
