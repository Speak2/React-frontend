// MiddleComponent.js
import React from 'react';
import MiddleLeft from './MiddleLeft';
import MiddleRight from './MiddleRight';

const MiddleComponent = ({ title, description, guestCount, bedroomCount, bathroomCount, loading, hostInformation, amenities,rooms,amenitiesIcons }) => {
  return (
    <div className="middle">
      <MiddleLeft
        title={title}
        description={description}
        guestCount={guestCount}
        bedroomCount={bedroomCount}
        bathroomCount={bathroomCount}
        loading={loading}
        hostInformation={hostInformation}
        amenities={ amenities}
        amenitiesIcons={amenitiesIcons}
        rooms={rooms} />
      <MiddleRight loading={loading} />
    </div>
  );
};

export default MiddleComponent;
