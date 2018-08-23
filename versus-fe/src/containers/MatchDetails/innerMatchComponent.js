import React , { Component } from 'react';
import MatchDetailsInfo from '../../components/MatchDetailsInfo/MatchDetailsInfo';
import MapContainer from './MapContainer'

class LocationMap extends Component {

   renderMap = () => {
      return <MapContainer/>
   }

  render() {
         return (
           <div>
             <div className="MatchDetails__map" >
              {this.renderMap()}
             </div>
             <div className="matchDetailsInfo">
               <MatchDetailsInfo match_id={this.props.match_id} sendAction={this.props.sendMatchDetails} />
             </div>
           </div>
         );
       }
}

export default LocationMap;
