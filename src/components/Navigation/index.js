import React from 'react';

import styled from 'styled-components/macro';

// import { useTheme } from '../../ThemeContext';

import Sidebar from '../Sidebar';
import Header from '../Header';
import MobileSearchbar from '../Header/Header.Searchbar.styled';

const NavContainer = styled.nav`
  /* display: flex; */
`;

const Navigation = () => {
  // const expand = useTheme(); // retrieve state of expand from our custom useContext hook
  return (
    <NavContainer>
      <Sidebar />
      <Header />
      <MobileSearchbar expand>
        <input
          type='text'
          name='searchField'
          id='headerSearchField'
          placeholder='Search'
        />
        <a href='#' className='header__search--button'>
          <SearchIcon />
        </a>
      </MobileSearchbar>
    </NavContainer>
  );
};

export default Navigation;
