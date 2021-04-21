import React from 'react';
import styled from 'styled-components/macro';

// import { useTheme } from '../../ThemeContext';

import { HeaderSearchbar } from './Header.Searchbar.styled';
import HeaderRight from './Header.Right';
import HeaderLeft from './Header.Left';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: calc(100% - 75px);
  min-width: 400px;
  height: 65px;
  background-color: var(--bg);
  z-index: 99;
  padding: 0.8rem 0.8rem 0.8rem 0;
  box-shadow: var(--box-shadow);
  margin-left: 75px;

  & > * {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft />
      <HeaderSearchbar />
      <HeaderRight />
    </HeaderContainer>
  );
};

export default Header;
