import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../resources/Search Icon.png'; // Adjust the path as needed

const SearchBarContainer = styled.div`
  margin: 0px 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 0 10px;
  transition: all 0.3s ease;
`;

const SearchOption = styled.button`
  background: none;
  border: none;
  padding: 14px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #222222;
  cursor: pointer;
  text-decoration: none;
`;

const Separator = styled.div`
  width: 1px;
  height: 24px;
  background-color: #dddddd;
`;

const SearchButton = styled.button`
  background-color: #FF385C;
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const SearchIcon = styled.img`
  width: 12px;
  height: 12px;
  filter: brightness(0) invert(1);
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchOption>Anywhere</SearchOption>
      <Separator />
      <SearchOption>Any week</SearchOption>
      <Separator />
      <SearchOption>Add guests</SearchOption>
      <SearchButton>
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchButton>
    </SearchBarContainer>
  );
}

export default SearchBar;