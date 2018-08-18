import React, { Component } from 'react';
import './MatchDetailsInfo.css'
class MatchDetailsInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location:'',
      time:''
    }
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  renderInput = (label, type ,name) => {
    return (
      <div className="divider">
        <span> {label} </span>
        <input className="inputField" type={type} onChange={this.handleFormChange} name={name}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="infoContainer">
          <div>

            <form className="infoForm">
              {this.renderInput("location","text","location")}
              {this.renderInput("time","date","time")}
            </form>

          </div>
        </div>
      </div>
    );
  }

}

export default MatchDetailsInfo;
