import React, { Component } from 'react';
import './MatchDetailsInfo.css';

import { connect } from 'react-redux';
import { locationChosen, sendMatchDetails } from '../../../redux/actions';

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
      match_datetime: `${this.state.date} ${this.state.time}:00`,
      location: this.state.location
    };

    this.props.sendMatchDetails({
      endpoint: `/matches/${this.props.match_id}/set`,
      method: 'POST',
      body: matchDetails
    });
  };

  findLocations = () => {
    this.props.locationChosen(this.state.location);
  };

  render() {
    return (
      <div className="infoBackGround">
        <div className="infoContainer">
          <form className="infoForm">
            {this.renderInput('Location', 'text', 'location')}
            <button
              type="button"
              className="sexyButton"
              onClick={this.findLocations}
            />
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  locationChosen: info => dispatch(locationChosen(info)),
  sendMatchDetails: apiInfo => dispatch(sendMatchDetails(apiInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchDetailsInfo);
