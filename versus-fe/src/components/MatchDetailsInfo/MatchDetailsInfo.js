import React, { Component } from 'react';
import './MatchDetailsInfo.css';

class MatchDetailsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
      location: ''
    };
  }

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderInput = (label, type, name) => {
    return (
      <div className="dividerInfo">
        <span> {label} </span>
        <input
          className="inputField"
          type={type}
          onChange={this.handleFormChange}
          name={name}
        />
      </div>
    );
  };

  sendFormInfo = () => {
    const matchDetails = {
      time: this.state.time,
      date: this.state.date,
      location: this.state.location
    };

    this.props.sendAction({
      endpoint: `/matches/${this.props.match_id}/set`,
      method: 'POST',
      body: matchDetails
    });
  };

  render() {
    return (
      <div className="infoBackGround">
        <div className="infoContainer">
          <form className="infoForm">
            {this.renderInput('Location', 'text', 'location')}
            {this.renderInput('Time', 'time', 'time')}
            {this.renderInput('Date', 'date', 'date')}
          </form>

          <div className="enter" onClick={this.sendFormInfo}>
            Enter
          </div>
        </div>
      </div>
    );
  }
}

export default MatchDetailsInfo;
