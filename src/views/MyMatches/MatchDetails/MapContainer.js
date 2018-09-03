import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { connect } from 'react-redux';
import { requestLocation } from '../../../redux/actions';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPosition: {}
    };
  }

  queryPlaces = () => {
    const params = {
      input: this.props.location
    };

    this.props.requestLocation({
      endpoint: '/requestLocation',
      method: 'POST',
      body: params
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.queryPlaces();
    }
    if (this.props.googlePlaces !== prevProps.googlePlaces) {
      this.setState({
        markerPosition: this.props.googlePlaces.candidates[0].geometry.location
      });
    }
  }

  renderMarker = () => {
    return <Marker position={this.state.markerPosition} />;
  };
  render() {
    const style = {
      width: '100%',
      height: '100%'
    };
    const containerStyle = {
      width: '100%',
      height: '40%'
    };
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: 41.379327,
          lng: 2.173349
        }}
        center={this.state.markerPosition}
        containerStyle={containerStyle}
        zoom={14}
      >
        {this.renderMarker()}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1> </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location,
  googlePlaces: state.googlePlaces
});

const mapDispatchToProps = dispatch => ({
  requestLocation: apiInfo => dispatch(requestLocation(apiInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: 'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto',
    libraries: ['places']
  })(MapContainer)
);
