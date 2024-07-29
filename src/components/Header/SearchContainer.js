import React, { useState } from 'react';
import CustomSearchBar from './CustomSearchBar';
import CalendarPopup from './CalendarPopup';
import GuestsPopup from './GuestsPopup';
import RegionPopup from './RegionPopup';

const SearchContainer = () => {
  const [showCalendarPopup, setShowCalendarPopup] = useState(false);
  const [showRegionPopup, setShowRegionPopup] = useState(false);

  // Function to handle CalendarPopup visibility
  const toggleCalendarPopup = () => {
    setShowCalendarPopup(prevState => !prevState);
  };

  // Function to handle RegionPopup visibility
  const toggleRegionPopup = () => {
    setShowRegionPopup(prevState => !prevState);
  };

  return (
    <div className="search-container">
      <CustomSearchBar 
        onRegionClick={toggleRegionPopup} 
        onDateClick={toggleCalendarPopup} // Pass the function to handle date clicks
      />
      <RegionPopup show={showRegionPopup} />
      <CalendarPopup show={showCalendarPopup} /> {/* Pass visibility state */}
      <GuestsPopup />
    </div>
  );
};

export default SearchContainer;
