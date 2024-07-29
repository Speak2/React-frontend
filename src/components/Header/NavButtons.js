import React from 'react';
import globeIcon from '../../resources/globe.png';
import menuIcon from '../../resources/menu.png';
import userIcon from '../../resources/user.png';

const NavButtons = () => {
  return (
    <nav className="nav-buttons">
      <button className="globe-button">
        <img src={globeIcon} alt="Language" className="icon" />
      </button>
      <button className="menu-button">
        <img src={menuIcon} alt="Menu" className="icon menu-icon" />
        <img src={userIcon} alt="User" className="icon user-icon" />
      </button>
    </nav>
  );
};

export default NavButtons;
