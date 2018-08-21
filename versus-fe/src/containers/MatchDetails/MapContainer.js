import React, { Component } from 'react'
import {Map , InfoWindow , Marker , GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  render(){
    const style = {
      width: '80%',
      height: '40%'
    }
    return(
      <Map google={this.props.google} style={style}zoom={14}>

        <Marker onClick={this.onMarkerClick}
            name={'Match Location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1> </h1>
          </div>
        </InfoWindow>

      </Map>
      )
    }
  }

  export default GoogleApiWrapper ({
    apiKey:'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto'
  })(MapContainer)
