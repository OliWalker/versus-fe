import React, { Component } from 'react';
import './Matches.css'
import Match from '../../components/Match/Match'

import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions'

import Loading from '../../components/LoadingPage/LoadingPage';

class Matches extends Component {

  constructor(props){
    super(props)
    this.props.getUserInfo()
    console.log("loading")
  }

  renderNextMatch = () => {
    const matches = this.props.matches
    return matches.map( theMatch => {
      return <Match matchInfo={theMatch}/>
    })
  }

  render() {
    const matches = this.props.matches
    if(!matches[0]) return <Loading />

    return (
      <div>
        <h1> Matches </h1>
        {this.renderNextMatch()}
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
