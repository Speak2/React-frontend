import React, { useState } from 'react';

const TabContainer = ({ show }) => {
  const [activeTab, setActiveTab] = useState('Stays');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`tab-container ${show ? 'show' : ''}`}>
      <button
        className={`tab ${activeTab === 'Stays' ? 'active' : ''}`}
        onClick={() => handleTabClick('Stays')}
      >
        Stays
      </button>
      <button
        className={`tab ${activeTab === 'Experiences' ? 'active' : ''}`}
        onClick={() => handleTabClick('Experiences')}
      >
        Experiences
      </button>
    </div>
  );
};

export default TabContainer;