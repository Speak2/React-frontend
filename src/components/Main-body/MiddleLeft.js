import React from 'react';
import ListingInfo from './ListingInfo';
import SleepSection from './SleepSection';
import AmenitiesSection from './AmenitiesSection';
import CalendarSection from './CalendarSection';


const MiddleLeft = ({ title, description, guestCount, bedroomCount, bathroomCount, loading, hostInformation, amenities,rooms,amenitiesIcons }) => {
  return (
    <div className="middle-left">

      <ListingInfo
        title={title}
        description={description}
        guestCount={guestCount}
        bedroomCount={bedroomCount}
        bathroomCount={bathroomCount}
        loading={loading}
        hostInformation={hostInformation}
          />
      <SleepSection rooms={rooms}/>
      <AmenitiesSection amenities={ amenities} amenitiesIcons={amenitiesIcons}/>
      <CalendarSection />

    </div>
  );
};

export default MiddleLeft;
