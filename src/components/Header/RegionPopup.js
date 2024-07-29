import React from 'react'; 

import worldMap from '../../resources/map/i am flexible.png';
import asia from '../../resources/map/south-east-asia.webp';
import canada from '../../resources/map/canada.webp';
import europe from '../../resources/map/europe.webp';
import thailand from '../../resources/map/Thailand.webp';
import middleEast from '../../resources/map/middle east.webp';

const RegionPopup = ({ show }) => {
  return (
    <div className={`region-popup ${show ? 'show' : 'hide'}`}>
      <h3>Search by region</h3>
      <div className="region-grid">
        <div className="region-item">
          <img src={worldMap} alt="World Map" />
          <span>I'm flexible</span>
        </div>
        <div className="region-item">
          <img src={asia} alt="Southeast Asia Map" />
          <span>Southeast Asia</span>
        </div>
        <div className="region-item">
          <img src={canada}  alt="Canada Map" />
          <span>Canada</span>
        </div>
        <div className="region-item">
          <img src={europe}  alt="Europe Map" />
          <span>Europe</span>
        </div>
        <div className="region-item">
          <img src={thailand} alt="Thailand Map" />
          <span>Thailand</span>
        </div>
        <div className="region-item">
          <img src={middleEast} alt="Middle East Map" />
          <span>Middle East</span>
        </div>
      </div>
    </div>
  );
};

export default RegionPopup;
