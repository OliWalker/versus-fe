import React, { Component } from 'react'
import {Map , InfoWindow , Marker , GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  queryPlaces = () => {
    // if (this.props.query) {
        const params = {
          key: 'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto',
          input: 'Nova Icaria',
          inputtype: 'textquery',
          fields: 'formatted_address,name,opening_hours,geometry'
        }

        const paramToString = (obj1) => {
          let aStr = ''
          for(let key in obj1) {
            const keyString = obj1[key].split(' ').join('\%20')
            aStr = aStr.concat(key.toString(), '=', keyString, '&')
          }
          return aStr;
        }

        const paramStr = paramToString(params)
        // fetch(`https://maps.googleapis.com/maps/
        // api/place/findplacefromtext/json?${paramStr}`)
        // .then()
    // }
  }

  render(){
    {this.queryPlaces()}
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
      </Map>
      )
    }
  }

  export default GoogleApiWrapper ({
    apiKey:'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto',
    libraries: ['places']
  })(MapContainer)
