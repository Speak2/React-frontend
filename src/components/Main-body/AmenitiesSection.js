import React from 'react';

const AmenitiesSection = ({ amenities, amenitiesIcons }) => {
  // Function to render each amenity item
  const renderAmenityItem = (amenity, index) => {
    const iconSrc = amenitiesIcons[index] || '';
    const isUnavailable = amenity.startsWith('no_');
    const displayName = isUnavailable ? amenity.slice(3) : amenity;

    return (
      <div key={index} className="amenity-item">
        <img src={iconSrc} alt={displayName} className="amenity-icon" />
        {isUnavailable ? <s>{displayName}</s> : displayName}
      </div>
    );
  };

  // Split amenities into two columns
  const midPoint = Math.ceil(amenities.length / 2);
  const leftColumnAmenities = amenities.slice(0, midPoint);
  const rightColumnAmenities = amenities.slice(midPoint);

  return (
    <div className="amenities-section">
      <h2>What this place offers</h2>
      <div className="amenities-grid">
        <div className="amenities-column">
          {leftColumnAmenities.map((amenity, index) => renderAmenityItem(amenity, index))}
        </div>
        <div className="amenities-column">
          {rightColumnAmenities.map((amenity, index) => renderAmenityItem(amenity, index + midPoint))}
        </div>
      </div>
      <button className="show-all-amenities">Show all {amenities.length} amenities</button>
    </div>
  );
};

export default AmenitiesSection;