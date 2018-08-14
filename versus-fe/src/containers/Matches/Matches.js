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
  }

  const matches = this.props.matches
  if(!matches[0]) return <Loading />

  renderNextMatch = () => {
    if(!this.props.matches) {
      return null
    }
    let x = this.props.matches
    return x.map( theMatch => {
      return <Match matchInfo={theMatch}/>
    })
  }

  render() {
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
