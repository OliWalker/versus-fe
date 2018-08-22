import React, { Component } from 'react'
import {Map , InfoWindow , Marker , GoogleApiWrapper } from 'google-maps-react';

import { connect } from 'react-redux'

export class MapContainer extends Component {

  queryPlaces = () => {
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
          return aStr.slice(0, (aStr.length-1));
        }

        const paramStr = paramToString(params)


  }

  componentDidUpdate(prevProps) {
    if(this.props.location !== prevProps.location){
      this.queryPlaces()
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
      </Map>
      )
    }
  }

const mapStateToProps = state => ({
  location: state.location
})

const mapDispatchToProps = dispatch => ({})

  export default connect(
    mapStateToProps,
    mapDispatchToProps)(
    GoogleApiWrapper ({
    apiKey:'AIzaSyBzBvfaosQJN9iUMMRAPD9ATnIPjofrCto',
    libraries: ['places']
  })(MapContainer))
