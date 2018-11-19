import React from 'react';
import PropTypes from 'prop-types';
import MatchDetailsInfo from '../MatchDetailsInfo/MatchDetailsInfo';
import MapContainer from './MapContainer';

const LocationMap = ({ match_id, sendMatchDetails }) => (
  <div>
    <div className="MatchDetails__map">
      <MapContainer />
    </div>
    <div className="matchDetailsInfo">
      <MatchDetailsInfo match_id={match_id} sendAction={sendMatchDetails} />
    </div>
  </div>
);

LocationMap.propTypes = {
  match_id: PropTypes.string,
  sendMatchDetails: PropTypes.func
};

export default LocationMap;
