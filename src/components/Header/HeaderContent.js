import React from 'react';
import SearchBarWrapper from './SearchBarWrapper';
import NavButtons from './NavButtons';

const HeaderContent = ({loading}) => {
  return (
    <div className="header-content">
        <SearchBarWrapper loading={loading}/>
        <NavButtons />
    </div>
  );
};

export default HeaderContent;