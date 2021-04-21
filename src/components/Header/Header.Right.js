import styled from 'styled-components/macro';

import { useThemeUpdate } from '../../ThemeContext';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';

const HeaderRightContainer = styled.div`
  width: 20%;
  min-width: 200px;
  justify-content: space-around;
  @media only screen and (max-width: 650px) {
    width: 40%;
  }

  & > * {
    /* margin: 0 0.9rem; */
    color: var(--button);
    cursor: pointer;
    opacity: 1;
    &:hover {
      opacity: 0.85;
    }
  }

  & > .mobileSearch {
    display: none;
    @media only screen and (max-width: 650px) {
      display: inline-block;
      width: 1.1em;
    }
  }
  @media only screen and (max-width: 460px) {
    justify-content: flex-end;
    & > * {
      margin-left: 1rem;
    }
    .d-mobile-none {
      display: none;
    }
  }
`;

const HeaderRight = () => {
  const Toggles = useThemeUpdate(); // retrieve function to toggle state of 'expand'
  const toggleMobile = Toggles.toggleMobile; // retrieve function to toggle state of 'expand'

  return (
    <HeaderRightContainer>
      <SearchIcon className='mobileSearch' onClick={() => toggleMobile()} />
      <VideoCallIcon className='d-mobile-none' />
      <AppsIcon className='d-mobile-none' />
      <NotificationsIcon className='d-mobile-none' />
      <Avatar
        alt='VP of Operations Tim Johnson'
        src='https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      />
    </HeaderRightContainer>
  );
};

export default HeaderRight;
