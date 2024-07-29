import React from 'react';
import map from '../../resources/map.png';

const LocationSection = ({latitude,longitude}) => {
  return (
    <div className="location-section">
      <h2>Where you'll be</h2>
      <p>Lima, Provincia de Lima, Peru latitude = {latitude}, longitude = {longitude}</p>
      <div className="map-container">
        <img src={map} alt="Map of Lima, Peru" className="map-image" />
      </div>
      <a href="#!" className="show-more">Show more &gt;</a>
    </div>
  );
};

export default LocationSection;
