import React, { Component } from 'react'
import {Map , InfoWindow , Marker , GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  queryPlaces = (map) => {
    if (this.props.query) {
      let service = new google.maps.places.PlacesService(map)
      service.findPlaceFromQuery(this.props.query, this.renderMarker)
    }
  }

  renderMarker = (results, status) => {
    if ( status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i=0; i < results.length; i++) {
        let place = results[i];
        createMarker(results[i]);
      }
    }
  }

  render(){
    const style = {
      width: '100%',
      height: '100%'
    }
    const containerStyle = {
      height: '50%'
    }
    return(
      <Map google={this.props.google} style={style} containerStyle={containerStyle} zoom={14}>

        <Marker onClick={this.onMarkerClick}
            name={'Match Location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1> </h1>
          </div>
        </InfoWindow>
          {this.QueryPlaces(this.map)}
      </Map>
      )
    }
  }

  export default GoogleApiWrapper ({
    apiKey:'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto',
    libraries: ['places']
  })(MapContainer)
