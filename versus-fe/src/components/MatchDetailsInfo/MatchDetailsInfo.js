import React, { Component } from 'react';
import './MatchDetailsInfo.css'

class MatchDetailsInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      match_datetime:'',
      location:''
    }
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  renderInput = (label, type ,name) => {
    return (
      <div className="dividerInfo">
        <span> {label} </span>
        <input className="inputField" type={type} onChange={this.handleFormChange} name={name}/>
      </div>
    )
  }

  sendFormInfo = () => {
    const matchDetails = {
      match_datetime:this.state.match_datatime,
      location:this.state.location
    }

    this.props.sendAction({
      endpoint:'/matches/id/set',
      method: 'POST',
      body: matchDetails
    })

  }

  render() {
    return (
      <div className="infoBackGround">
        <div className="infoContainer">

            <form className="infoForm">
              {this.renderInput("Location","text","location")}
              {this.renderInput("Time","datetime-local","match_datetime")}
            </form>

            <div className="enter" onClick={this.sendFormInfo}>
              <text> Enter </text>
            </div>

        </div>
      </div>
    );
  }

}

export default MatchDetailsInfo;
