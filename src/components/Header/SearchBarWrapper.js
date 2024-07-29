import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import TabContainer from './TabContainer';
import SearchContainer from './SearchContainer';

const SearchBarWrapper = ({loading}) => {
  const [showSearchContainer, setShowSearchContainer] = useState(false); // State to manage SearchContainer visibility
  const wrapperRef = useRef(null);

  const handleSearchBarButtonClick = () => {
    setShowSearchContainer(true); // Show SearchContainer when any SearchBar button is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSearchContainer(false); // Hide SearchContainer when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="search-bar-wrapper">
      <SearchBar 
        className={showSearchContainer ? 'hide' : ''} 
        onClick={handleSearchBarButtonClick} 
        loading={loading}
      />
      {showSearchContainer && <SearchContainer />} {/* Show SearchContainer when active */}
      <TabContainer show={showSearchContainer} />
    </div>
  );
};

export default SearchBarWrapper;
