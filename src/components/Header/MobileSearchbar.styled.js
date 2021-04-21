import styled from 'styled-components/macro';

import { useTheme } from '../../ThemeContext';

import SearchIcon from '@material-ui/icons/Search';

const MobileSearchbarContainer = styled.div`
  display: none;
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    right: 0;
    height: 65px;
    /* width: 100%; */
    width: ${props =>
      props.expand === '75px' ? 'calc(100vw - 77px)' : 'calc(100vw - 251px)'};
    transition: width 250ms cubic-bezier(0.5, 0, 0.5, 1);

    margin-top: 65px;
    margin-left: ${props => (props.expand === '75px' ? '75px' : '200px')};
    /* padding: 0.8rem 10%; */
    transition: margin-left 250ms cubic-bezier(0.5, 0, 0.5, 1);
    z-index: 10;
  }
  @media only screen and (max-width: 450px) {
    width: 100vw;
  }
`;

const MobileSearchInput = styled.input.attrs({
  id: 'headerMobileSearchField',
})`
  width: 80%;
  padding: 2px 6px;
  flex: 1;
  height: 100%;
  box-shadow: inset 0 1px 2px #eee;
  border: 1px solid #ccc;
  border-radius: 2px 0 0 2px;
  border-right: none;
`;

const MobileSearchbarStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: width 250ms cubic-bezier(0.5, 0, 0.5, 1);
  /* margin-left: ${props =>
    props.mobileSearch === '75px' ? '75px' : '250px'}; */
  padding: 0.8rem 10%;
  transform: ${props =>
    props.mobileSearch === 'closed' ? 'translateY(-65px)' : 'translateY(0px)'};
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
  background: var(--bg);
  border: var(--border);

  /* .mobileSearchField {
    width: 80%;
    padding: 2px 6px;
    flex: 1;
    height: 100%;
    box-shadow: inset 0 1px 2px #eee;
    border: 1px solid #ccc;
    border-radius: 2px 0 0 2px;
    border-right: none;
  } */

  .header__search--button {
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
    @media only screen and (max-width: 600px) {
      width: 50px !important;

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
  }
`;

const MobileSearchbar = () => {
  const Values = useTheme(); // retrieve state of expand from our custom useContext hook
  const [mobileSearch] = Values.mobile;
  const [expand] = Values.expand;

  return (
    <MobileSearchbarContainer expand={expand} mobileSearch={mobileSearch}>
      <MobileSearchbarStyled mobileSearch={mobileSearch}>
        <MobileSearchInput
          type='text'
          name='searchField'
          id='headerSearchField'
          placeholder='Search'
        />
        <a href='#' className='header__search--button'>
          <SearchIcon />
        </a>
      </MobileSearchbarStyled>
    </MobileSearchbarContainer>
  );
};

export default MobileSearchbar;
