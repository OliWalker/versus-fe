import React from 'react';
import MatchDetailsInfo from '../../components/MatchDetailsInfo/MatchDetailsInfo';

export default {
  loactionSetter: props => {
    return (
      <div>
        <div className="MatchDetails__map">
          <img
            alt="match location"
            src="https://s.hdnux.com/photos/50/72/62/10726554/3/rawImage.png"
          />
        </div>

        <div className="matchDetailsInfo">
          <MatchDetailsInfo sendAction={props.sendMatchDetails} />
        </div>
      </div>
    );
  }
};
