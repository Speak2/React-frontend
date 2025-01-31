import React from 'react'; 
import Shimmer from '../Shimmer/Shimmer';

const SearchBar = ({ className, onClick, loading }) => {
  return (
    <div className={`search-bar ${className}`} id="searchBar">
      {loading ? (<div className="search-bar-shimmer"> <Shimmer /></div>) : (
          <button className="search-option" onClick={onClick}>Anywhere</button>
      )}
      <span className="separator"></span>
      {loading ? (<div className="search-bar-shimmer"> <Shimmer /></div>) : (
          <button className="search-option" onClick={onClick}>Any week</button>
      )}
      <span className="separator"></span>
      {loading ? (<div className="search-bar-shimmer"> <Shimmer /></div>) : (
          <button className="search-option" onClick={onClick}>Add guests</button>
      )}
      
      <button className="search-button" onClick={onClick}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentColor', strokeWidth: '4', overflow: 'visible' }}>
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
            </path>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
