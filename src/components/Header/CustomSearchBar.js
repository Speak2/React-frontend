import React from 'react';

const CustomSearchBar = ({ onRegionClick, onDateClick }) => {
  return (
    <div className="custom-search-bar">
      <div className="search-item">
        <label>Where</label>
        <input type="text" placeholder="Search destinations" onClick={onRegionClick} /> {/* Trigger onRegionClick */}
      </div>
      <div className="search-item">
        <label>Check in</label>
        <input type="text" id="date-input" placeholder="Add dates" onClick={onDateClick} /> {/* Trigger onDateClick */}
      </div>
      <div className="search-item">
        <label>Check out</label>
        <input type="text" placeholder="Add dates" onClick={onDateClick} /> {/* Trigger onDateClick */}
      </div>
      <div className="search-item">
        <label>Who</label>
        <input type="text" id="guestsInput" placeholder="Add guests" readOnly />
      </div>
      <button className="search-button">
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

export default CustomSearchBar;
