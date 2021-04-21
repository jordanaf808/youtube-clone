import styled from 'styled-components/macro';

import SearchIcon from '@material-ui/icons/Search';

export const Searchbar = styled.div`
  width: 40%;
  padding: 4px;

  input {
    @media only screen and (max-width: 650px) {
      display: none;
    }
    padding: 2px 6px;
    flex: 1;
    height: 100%;
    box-shadow: inset 0 1px 2px #eee;
    border: 1px solid #ccc;
    border-radius: 2px 0 0 2px;
    border-right: none;
  }

  .header__search--button {
    @media only screen and (max-width: 650px) {
      display: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px !important;
    height: 100%;
    background-color: var(--button-bg);
    color: var(--button);
    opacity: 0.8;
    border: var(--border);
    box-shadow: inset 0 1px 2px #eee;
    border-radius: 0 2px 2px 0;

    svg {
      // display: block;
      width: 24px;
      height: 24px;
    }

    &:hover {
      opacity: 1;
      box-shadow: inset 0 1px 2px #eee;
      box-shadow: 0 1px 0 #00000010;
    }
  }
`;

export const HeaderSearchbar = () => {
  return (
    <Searchbar>
      <input
        type='text'
        name='searchField'
        id='headerSearchField'
        placeholder='Search'
      />
      <a href='#' className='header__search--button'>
        <SearchIcon />
      </a>
    </Searchbar>
  );
};
