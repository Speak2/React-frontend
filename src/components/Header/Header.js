import React from 'react';
import HeaderContent from './HeaderContent';

const Header = ({loading}) => {
  return (
    <header>
        <HeaderContent loading={loading}/>
    </header>
  );
};

export default Header;